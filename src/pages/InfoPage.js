import React from 'react';

class InfoPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
        <div className={'infoblock'}>
            <div className={'info-info'}>
                <div className={'info-header'}>Контактная информация</div>
                <div className={'info-desc'}><img className={'icon'} src="https://cdn.onlinewebfonts.com/svg/img_85290.png"></img><b>Телефон:</b> +7 (999) 126-19-55</div>
                <div className={'info-desc info-a'}><img className={'icon'} src="https://image.freepik.com/free-icon/_318-10231.jpg"></img><b>Электронная почта:</b> <a href=''> kialta@inbox.ru</a> </div>
                <div className={'info-desc'}><img className={'icon'} src="https://www.freepngimg.com/thumb/united_states/76079-google-computer-icons-states-maps-united-location.png"></img><b>Адрес:</b> Переезд</div>
                <div className={'info-desc info-a'}><img className={'icon'} src="https://icons-for-free.com/iconfiles/png/512/social+square+vk+vkontakte+icon-1320086774788236573.png"></img><b>Группа ВКонтакте:</b> <a href='https://vk.com/kialta'> Юридическая компания « КИАЛТА »</a> </div>
            </div>
            <img className={'map'}></img>
        </div>
        </>   
        )
    }
}

export default InfoPage;