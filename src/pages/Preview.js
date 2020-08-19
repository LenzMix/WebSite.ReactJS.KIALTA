import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: 1
        };
    }
    
    componentDidMount() {
      this.timerId = setInterval(
        ()=> this.prereload(),
        7000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }

    prereload () {
        if (this.state.pid < 3) {
            this.setState({
                pid: this.state.pid+1
            })
        }
        else {
            this.setState({
                pid: 1
            })
        }
    }

    prebackload () {
        var id = this.state.pid;
        if (id > 1) {
            this.setState({
                pid: id-1
            })
        }
        else {
            this.setState({
                pid: 3
            })
        }
    }
    
    loadin() {
        var id = this.state.pid;
        if (id == 1) {
            return (
                <div className={'prev1 slider'}>
                <button className={'bt-left'} onClick={()=>this.prebackload()}></button>
                <div className={'prev-m'}>
                    <div className={'prev-header'}>
                        Требуется помощь в суде?
                    </div>
                    <div className={'prev-desc'}>
                        Наши специалисты смогут вам помочь
                    </div>
                </div>
                <button className={'bt-right'} onClick={()=>this.prereload()}></button>
                </div>
            )
        }
        else if (id == 2) {
            return (
                <div className={'prev2 slider'}>
                <button className={'bt-left'} onClick={()=>this.prebackload()}></button>
                <div className={'prev-m'}>
                    <div className={'prev-header'}>
                        Боитесь подписать договор?
                    </div>
                    <div className={'prev-desc'}>
                        Мы поможем вам избежать "подводных камней" в документах
                    </div>
                </div>
                <button className={'bt-right'} onClick={()=>this.prereload()}></button>
                </div>
            )            
        }
        else {
            return (
                <div className={'prev3 slider'}>
                <button className={'bt-left'} onClick={()=>this.prebackload()}></button>
                <div className={'prev-m'}>
                    <div className={'prev-header'}>
                        Требуется юридическая консультация?
                    </div>
                    <div className={'prev-desc'}>
                        Юристы готовы ответить на любые ваши вопросы в On-Line чате. Просто выберите тему
                    </div>
                </div>
                <button className={'bt-right'} onClick={()=>this.prereload()}></button>
                </div>
            )
        }

    }

    render() {
        return (
         <>
         {this.loadin()}
         </>   
        )
    }
}

export default Preview;