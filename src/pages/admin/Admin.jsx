import React from 'react'
import "./Admin.scss"
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import AdminSection from "./adminComponents/adminSection/AdminSection"

const Admin = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [sections, setSections] = useState([]);
    const [sectionsData, setSectionsData] = useState({}); // Store data for all sections

    // Function to fetch sections
    const fetchSections = async () => {
        try {
            const sectionsSnapshot = await getDocs(collection(db, 'menu'));
            const sectionsData = sectionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSections(sectionsData);
        } catch (error) {
            console.error('Error fetching menu sections:', error);
        }
    };

    // Call fetchSections when the component mounts
    useEffect(() => {
        fetchSections();
    }, []);

    const handleDeleteItem = async (itemId) => {
        try {
            // Determine the section of the item based on the selected section
            const section = selectedSection;
            await deleteDoc(doc(db, `menu/${section}/items`, itemId));

            // Update the local sectionsData to reflect the deletion
            setSectionsData((prevState) => {
                const updatedSectionData = {
                    ...prevState,
                    [section]: prevState[section].filter((item) => item.id !== itemId),
                };
                return updatedSectionData;
            });
        } catch (error) {
            console.log("Error deleting item:", error);
        }
    };
    const handleSectionClick = async (sectionId) => {
        setSelectedSection(sectionId);

        // Check if the section data is already loaded
        if (!sectionsData[sectionId]) {
            try {
                const sectionSnapshotItems = await getDocs(collection(db, `menu/${sectionId}/items`));
                const sectionSnapshotItem = await getDocs(collection(db, `menu/${sectionId}/item`));
                const sectionItems = [
                  ...sectionSnapshotItems.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                  ...sectionSnapshotItem.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                ];

                // Update the sectionsData state with the new section's data
                setSectionsData((prevState) => ({
                    ...prevState,
                    [sectionId]: sectionItems,
                }));
            } catch (error) {
                console.error(`Error fetching data for section ${sectionId}:`, error);
            }
        }
    }
    return (
        <section className='admin'>
            <div className="admin__container containered">
                <div className="admin__left">
                    <h1>Admin Dashboard</h1>
                    <div className="admin__left_container">
                        <Link to="/admin/addNewItem">
                            <span>Add New Item</span>
                        </Link>
                        <ul >
                            {sections.map((section) => (
                                <li key={section.id} onClick={() => handleSectionClick(section.id)}>
                                    <h3>{section.id}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="admin__right">
                    <div className="admin__right__container">
                        {selectedSection === null && <p>Select a section to view its content.</p>}
                        {selectedSection && sectionsData[selectedSection] ? (
                            // Render content if the section and its data exist
                            <AdminSection sectionData={sectionsData[selectedSection]} onDeleteItem={handleDeleteItem} section={selectedSection} />
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin