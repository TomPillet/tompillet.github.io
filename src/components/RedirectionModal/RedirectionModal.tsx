import { FC, useRef, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import './RedirectionModal.scss';

const RedirectionModal: FC = () => {
    let { t }= useTranslation();
    const [isModalDisplayed, setIsModalDisplayed] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);

    function closeModal () {
        setIsModalDisplayed(false);
    };
    
    document.body.style.overflow = (isModalDisplayed) ? "hidden" : "";
    document.addEventListener('mousedown', (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            closeModal();
        }
    });
    
    return (
        <div className="redirection-modal" style={{display: (isModalDisplayed) ? 'flex' : "none"}} ref={modalRef}>
            <div className="redirection-msg">{t("redirect_to_dev.message")}</div>
            <div className="redirection-buttons">
                <button className='redirection-button' onClick={() => closeModal()}>{t("redirect_to_dev.stay")}</button>
                <a className='redirection-button redirection-link' href="https://tompillet-dev.vercel.app/">{t("redirect_to_dev.explore")}</a>
            </div>
        </div>
    );
}
 
export default RedirectionModal;