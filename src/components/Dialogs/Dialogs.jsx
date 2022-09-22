import React from "react";
import style from './Dialogs.module.css'

function Dialogs(props) {
    return (
        <section className={style.dialogs}>
            <div className={style.dialogs_items}>
                <div className={style.dialog}>
                    Ivan
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    Divan
                </div>
                <div className={style.dialog}>
                    Oleg
                </div>
                <div className={style.dialog}>
                    Sanya
                </div>
                <div className={style.dialog}>
                    Grirory
                </div>
                <div className={style.dialog}>
                    Zafir
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you</div>
                <div className={style.message}>War is coming</div>
                <div className={style.message}>Run from contry</div>
                <div className={style.message}>End is hear</div>
            </div>
            <h2>Dialogs</h2>
        </section>
    )
}

export default Dialogs;