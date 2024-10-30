import {Button, Modal} from "flowbite-react";

export default function JobListModal({openModal, selectedRowData, setOpenModal, handleCloseModal}) {
    return <>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Event Details</Modal.Header>
            <Modal.Body>
                <div className="space-y-20 ">
                    <div className="p-6 bg-white shadow-md  w-90 relative rounded-xl">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold">Software Engineer</h3>
                            <p className="text-xl">{selectedRowData.companyName}</p>
                        </div>
                        <div className="space-y-4">

                            <div className="border-t pt-2 mb-4">
                                <p className="text-md font-bold">Description</p>
                                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem maxime rem dolores maiores dolor aperiam debitis consequatur voluptate nisi, et sunt ducimus nobis, ipsum voluptates eum. Dolore cum rerum odit!</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between border-t pt-2">
                                <span className="text-gray-600">Deadline</span>
                                <span className="text-black">Jan 10, 2024</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                                <span className="text-gray-600">Location</span>
                                <span className="text-black">{selectedRowData.location}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                                <span className="text-gray-600">Salary</span>
                                <span className="text-black">{selectedRowData.salary}</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                                <span className="text-gray-600">Posted By</span>
                                <span className="text-black">ABC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="bg-blue-700  hover:bg-blue-400" onClick={() => handleCloseModal()}>Apply</Button>
                <Button className="bg-blue-700  hover:bg-blue-400" onClick={() => handleCloseModal()}>
                    Chat
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}