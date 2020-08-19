import React from 'react';
import {SetTheme} from './../functions/Socket';
import img1 from './../theme/img1.png';
import img2 from './../theme/img2.jpg';
import img3 from './../theme/img3.gif';
import img4 from './../theme/img4.jpg';
import img5 from './../theme/img5.jpg';
import img6 from './../theme/img6.jpg';
import img7 from './../theme/img7.png';
import img8 from './../theme/img8.jpg';
import img9 from './../theme/img9.png';


class StartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    

    openneed(id) {

    }

    themesel(t) {
        SetTheme(t);
        window.location.hash='ClientJoin';
    }

    render() {
        return (
         <>

            <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Сфера гражданского права')}>
                    <img src={img1} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Сфера гражданского права</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div>
            <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Жилищные дела')}>
                    <img src={img2} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Жилищные дела</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Семейные споры')}>
                    <img src={img3} className={'black-pic'}></img>
                    <div className={'black-headtext'}> <p>Семейные споры</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Банкротство физических и юридических лиц')}>
                    <img src={img4} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Банкротство физических и<br/> юридических лиц</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Разъяснение документов')}>
                    <img src={img5} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Разъяснение документов</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Сфера предпринимательского права')}>
                    <img src={img6} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Сфера предпринимательского права</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Консультации по вопросам регистрации юридических лиц')}>
                    <img src={img7} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Консультации по вопросам регистрации<br/>юридических лиц</p>
                    </div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Сопровождение деятельности организаций')}>
                    <img src={img8} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Сопровождение деятельности<br/> организаций</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div> <div className={'consult-block'}>
                <div className={'black-header'} onClick={()=>this.themesel('Сфера административного права')}>
                    <img src={img9} className={'black-pic'}></img>
                    <div className={'black-headtext'} > <p>Сфера административного права</p></div>
                </div>
                <div className={'black-under'} id='0'>

                </div>
            </div>
    

         </>   
        )
    }
}

export default StartPage;