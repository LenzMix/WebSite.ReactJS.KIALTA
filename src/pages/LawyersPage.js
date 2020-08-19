import React from 'react';
import { socket , Layers } from './../functions/Socket'
//socket.emit('needporn');
console.log('NEED FURRY');

class LawyerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lawers: []
        };
        this.socketListener = this.socketListener.bind(this);
        this.HardCoreSEX = this.HardCoreSEX.bind(this);
        this.checkonline = this.checkonline.bind(this);
    }

    socketListener() {
        let arr_layers = [];
        /*socket.removeAllListeners('layeradd');
        socket.removeAllListeners('layeraddclear');
        socket.removeAllListeners('layeraddstop');
        socket.on('layeradd', (fio,desc,avatar,education,staj) => {
            console.log('Найден юрист: '+ruserName);
            let lay = {
                fio: fio,
                avatar: avatar,
                desc: desc,
                education: education,
                staj: staj,
            };
            arr_layers.push(lay)
        });
        socket.on('layeraddclear', () => {
            console.log('Список юристов отчищен');
            arr_layers = [];
        });
        socket.on('layeraddstop', () => {
            console.log('Юристы занесены в стейты');
            this.setState({lawers: arr_layers});
        });*/
        console.log('Начинаю прослушку');
        socket.removeAllListeners('layeradd');
        socket.removeAllListeners('layeraddclear');
        socket.removeAllListeners('layeraddstop');
        socket.on('layeraddclear', () => {
            console.log('Начало передачи информации о юристах');
            this.setState({
                lawers: []
            })
        });
        socket.on('layeradd', (fio,desc,avatar,education,staj,isonline) => {
            console.log('Добавляю юриста');

            this.state.lawers.push({
                fio: fio,
                avatar: avatar,
                desc: desc,
                education: education,
                staj: staj,
                isOnline: isonline,
            });
            
            console.log('Сгрузка информации юристов...');
            console.log(this.state.lawers,' lawyers' );
            this.setState({
                lawers: this.state.lawers
            })
        });
        socket.on('layeraddstop', () => {
            
            console.log(this.state.lawers,'lawyersended');
            
            console.log('Конец передачи информации');
        });
    }

    checkonline(i) {
        if (i.isOnline == true) {
            return <div className={'Online'}>В СЕТИ</div>
        }
    }

    HardCoreSEX(){
        console.log('Добавление блока юристов');
        let HuiloEbanoe = this.state.lawers.map((info,i) =>
        <div className={'lawyerblock'} key={i}>
            <img src={info.avatar} className={'lawyer-logo'} width='100%' height='100%'/>
            <div className={'lawyer-info'}>
            <div className={'lawyer-name'}>{info.fio} {this.checkonline(info)}</div>
                <div className={'lawyer-desc'}>
                    {info.desc}
                </div>
                <div className={'lawyer-descplus'}><b>Стаж работы:</b> {info.staj} года/лет</div>
                <div className={'lawyer-descplus'}><b>Образование:</b> {info.education}</div>
            </div>
        </div>
        );
        console.log('Страница перерендерина');
        return (
          <>{HuiloEbanoe}</>
        );    
    }

    render() {
        return (
        <>

        
        <div className={'lawyersblock'} onLoad={this.socketListener()}>
             

            {this.HardCoreSEX()}
            </div>
        
        </>   
        )
    }
}

export default LawyerPage;