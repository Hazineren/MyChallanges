import React, { useState } from 'react'


export const AppContext = React.createContext();

export function AppContextWrapper({ children }) {

    const [planList, setPlanList] = useState()
    const [category, setCategory] = useState([
        { id: '1', name: 'Animal', image: require('../../assets/animals.png'), missionEnd: 'Gezdirildi' },
        { id: '2', name: 'Books', image: require('../../assets/books.png'), missionEnd: 'Okundu' },
        { id: '3', name: 'Home', image: require('../../assets/home.png'), missionEnd: 'Yapıldı' },
        { id: '4', name: 'Plant', image: require('../../assets/plant.png'), missionEnd: 'Sulandı' },
        { id: '5', name: 'Games', image: require('../../assets/game.png'), missionEnd: 'Yapıldı' }
    ]);
 

    const [patCategoryDetail, setPatCategoryDetail]=useState([
        {patCategory:'Köpek',patName:'Maviş',missionName:'Evcil Hayvanı Gezdir',missionStartTime:'12.00',missionEndTime:'12.30',patId:'1'}
    ])

    const [bookCategoryDetail, setBookCategoryDetail]=useState([
        {bookCategory:'Roman',bookName:'Yalnızlarrrrr',bookAuthor:'Namık Kemal',bookPage:250,unReadPage:250,isRead:false, bookId:'2'},
        {bookCategory:'Roman',bookName:'Yalnızlar',bookAuthor:'Namık Kemal',bookPage:250,unReadPage:250,isRead:false, bookId:'3'}
    ])

    const [valoDetail, setValoDetail]=useState([
        {characterName:'Brimstone', characterRole:'Controller',countryOfCharacter:'ABD',gender:'Man',image: require('../../assets/brimstone.png'),agentInfo:'Joining from the USA, Brimstone orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.'},
        {characterName:'Phoenix', characterRole:'Duelist', countryOfCharacter:'England', gender:'Man',image: require('../../assets/phoenix.png') ,agentInfo:'Hailing from the U.K., Phoenix is star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he is got backup or not, he will rush into a fight on his own terms.'},
        {characterName:'Sage', characterRole:'Sentinel', countryOfCharacter:'China', gender:'Women',image: require('../../assets/sage.png'), agentInfo:'The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.'},
        {characterName:'Sova', characterRole:'Initiator', countryOfCharacter:'Russia', gender:'Man',image: require('../../assets/sova.png'), agentInfo:'Born from the eternal winter of Russia is tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.'},
        {characterName:'Viper', characterRole:'Controller', countryOfCharacter:'ABD', gender:'Women',image: require('../../assets/viper.png'), agentInfo:'The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy is vision. If the toxins dont kill her prey, her mind games surely will.'},
        {characterName:'Cypher', characterRole:'Sentinel', countryOfCharacter:'Morocco', gender:'Man',image: require('../../assets/cypher.png') ,agentInfo:'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy is every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.'},
        {characterName:'Reyna', characterRole:'Duelist', countryOfCharacter:'Mexican', gender:'Women',image: require('../../assets/reyna.png'), agentInfo:'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.'},
        {characterName:'Killjoy', characterRole:'Sentinel', countryOfCharacter:'Germany', gender:'Women',image: require('../../assets/killjoy.png'), agentInfo:'The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesnt stop her enemies, her robots debuff will help make short work of them.'},
        {characterName:'Breach', characterRole:'Initiator', countryOfCharacter:'Sweden', gender:'Man',image: require('../../assets/breach.png'), agentInfo:'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.'},
        {characterName:'Omen', characterRole:'Controller', countryOfCharacter:'Mexican', gender:'Man',image: require('../../assets/omen.png'), agentInfo:'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.'},
        {characterName:'Jett', characterRole:'Duelist', countryOfCharacter:'Korea', gender:'Women',image: require('../../assets/jett.png'), agentInfo:'Representing her home country of South Korea, Jett is agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.'},
        {characterName:'Raze', characterRole:'Duelist', countryOfCharacter:'Brazil', gender:'Women',image: require('../../assets/raze.png'), agentInfo:'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”'},
        {characterName:'Skye', characterRole:'Initiator', countryOfCharacter:'australia', gender:'Women',image: require('../../assets/skye.png'), agentInfo:'Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.'},
        {characterName:'Fade', characterRole:'Initiator', countryOfCharacter:'Turkey', gender:'Women',image: require('../../assets/fade.png'), agentInfo:'Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.'},
        {characterName:'Chamber', characterRole:'Sentinel', countryOfCharacter:'France', gender:'Man',image: require('../../assets/chamber.png'),agentInfo:'Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.'},
    ])

    const [agentCategory, setAgentCategory]=useState([
        {
            agentRole:'All'
        },
        {
            agentRole:'Initiator'
        },
        {
            agentRole:'Duelist'
        },
        {
            agentRole:'Sentinel'
        },
        {
            agentRole:'Controller'
        }
    ])
    
    const [plantWaterTime,setPlantWaterTime]=useState();

    const [homeDetail, setHomeDetail] = useState([
        {id:1, workName:'Mutfak',works:'Mutfak İşleri ;', workList:[
            {id:0,name:'Bulaşık Makinesi Çalıştır',status:false},
            {id:1,name:'Yemek Yap',status:false},
            {id:2,name:'Mutfağı Süpür',status:false}],image:require('../../assets/kitchen.png')},
        {id:2, workName:'Salon', works:'Salon İşleri ;', workList:[
            {id:0,name:'Salonu Süpür',status:false},
            {id:1,name:'Halıları Silkele',status:false},
            {id:2,name:'Odayı Havalandır',status:false}],image:require('../../assets/livingRoom.jpg')},
        {id:3, workName:'Bahçe', works:'Bahçe İşleri ;', workList:[
            {id:0,name:'Çiçekleri Sula',status:false},
            {id:1,name:'Havuzu Temizle',status:false},
            {id:2,name:'Ağaçları Buda',status:false}],image:require('../../assets/garden.jpg')},
        {id:4, workName:'Banyo', works:'Banyo İşleri ;', workList:[
            {id:0,name:'Mermerleri Cifle',status:false},
            {id:1,name:'Küveti Yıka',status:false},
            {id:2,name:'Duş Başlığını Değiştir',status:false}],image:require('../../assets/banyo.jpg')}
    ])
    return (
        <AppContext.Provider
            value={{
                planList,
                setPlanList,
                category,
                setCategory,
                patCategoryDetail,
                setPatCategoryDetail,
                bookCategoryDetail, 
                setBookCategoryDetail,
                valoDetail, 
                setValoDetail,
                agentCategory,
                setAgentCategory,
                homeDetail, 
                setHomeDetail,
                plantWaterTime,
                setPlantWaterTime
            }}>
            {children}

        </AppContext.Provider>
    )
}

export function useAppContext() {
    return React.useContext(AppContext)
}