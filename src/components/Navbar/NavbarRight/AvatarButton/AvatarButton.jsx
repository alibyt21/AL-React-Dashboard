import { useState } from "react";
import Button from "./Button";
import GreenDot from "./GreenDot";
import Modal from "src/components/Modal";
import ModalHeader from "src/components/Modal/ModalHeader";
import ModalBody from "src/components/Modal/ModalBody";
import ModalFooter from "src/components/Modal/ModalFooter";
import { defaultHeaderHeight } from "src/settings/config";

export default function AvatarButton({ direction }) {
    const [active, setActive] = useState(false);
    return (
        <div className="relative">
            <Button isActive={active} toggle={() => setActive(true)} />
            <Modal
                isOpen={active}
                toggle={() => setActive(false)}
                top={defaultHeaderHeight}
                width={300}
                left={direction == "rtl" && 10}
                right={direction != "rtl" && 10}
            >
                {/* <ModalHeader toggle={() => setActive(false)} >
                    salam
                </ModalHeader> */}
                <ModalBody>
                    <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                        <span className="text-gray-800">
                            Ali Bayat
                        </span>
                        <span className="text-sm text-gray-400">
                            alibyt21@example.com
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
                        <a href="#">Logout</a>
                    </div>
                </ModalBody>
                {/* <ModalFooter>
                    <div
                        onClick={() => { setActive(false) }}
                    >
                        ذخیره تغییرات
                    </div>
                </ModalFooter> */}
            </Modal>
        </div>
    )
}