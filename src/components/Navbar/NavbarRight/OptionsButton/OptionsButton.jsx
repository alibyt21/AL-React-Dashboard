import { useState } from "react";
import Button from "./Button";
import Modal from "src/components/Modal";
import ModalBody from "src/components/Modal/ModalBody";
import { defaultHeaderHeight } from "src/settings/config";

export default function OptionsButton() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative">
            <Button toggle={() => setActive(true)} />
            <Modal isOpen={active} toggle={() => setActive(false)} width={300} top={defaultHeaderHeight} left={140}>
                <ModalBody>
                    <div className="p-4 font-medium border-b">
                        <span className="text-gray-800">
                            Options
                        </span>
                    </div>
                    <ul className="flex flex-col p-2 my-2 space-y-1">
                        <li>
                            <a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
                                Link
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">
                                Another Link
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
                        <a href="#">See All</a>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}