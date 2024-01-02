import { ReactElement } from "react"
import './style.scss'
interface Props {
    openButton?: ReactElement
    content?: ReactElement
    closeButton?: ReactElement
}

export default function Modal(props: Props) {
    function openModal() {
        const modal = document.getElementById("modal")
        const body = document.getElementsByTagName('body')[0]
        const dialog = document.getElementById('dialog-content')
        const content = document.getElementById('content')
        const closeButton = document.getElementById('button-close')
        if (dialog && modal && content && closeButton) {
            dialog?.style.setProperty('display', 'flex')
            body?.append(dialog)
            dialog.style.setProperty('pointer-events', 'none')
            content.style.setProperty('pointer-events', 'all')
            closeButton.addEventListener('click', () => {
                modal.append(dialog)
                dialog?.style.setProperty('display', 'none')
            })
        }
    }

    return (
        <div id="modal">
            <div className="button-open" onClick={openModal}>
                {props.openButton}
            </div>
            <div id="dialog-content" style={{ display: 'none' }}>
                <div id="content">
                    <div id="button-close" >
                        {props.closeButton}
                    </div>
                    {props.content}
                </div>
            </div>
        </div>
    )
}