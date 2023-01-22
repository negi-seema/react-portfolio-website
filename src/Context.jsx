import React, { createContext,useContext, useReducer } from 'react'
import reducer from './Reducer'

const AppContextCreate = createContext()

const ContextAppProvider = ({children}) =>{

    let initailvalue = {
        title:'',
        txt:'',
        img:''
    }
    let [initalstate,dispatch] = useReducer(reducer,initailvalue);

    let updateHome = () =>{
        return dispatch({
            type:'HOME',
            payload:{
                title:'TECHNICAL NEGI',
                txt:'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
                img:'./img/img1.webp',
                btn:'HIRE ME'
            }
        })
    }

    let updateAbout = () =>{
        return dispatch({
            type:'ABOUT',
            payload:{
                title:'ABOUT TECHNICAL NEGI',
                txt:'Site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
                img:'./img/img2.webp',
                btn:'Contact Us'
            }
        })
    }

    let Servicesupdate = () =>{
        return dispatch({
            type:'SERVICES',
            payload:[
                {
                    img:'./img/post1.jpg',
                    text:'Purus porta feugiats dia sed ipsum enim gravida lectus.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
                },
                {
                    img:'./img/post2.jpg',
                    text:'Purus porta feugiats dia sed ipsum enim gravida lectus.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
                },
                {
                    img:'./img/post3.jpg',
                    text:'Purus porta feugiats dia sed ipsum enim gravida lectus.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
                },
                {
                    img:'./img/post4.jpg',
                    text:'Purus porta feugiats dia sed ipsum enim gravida lectus.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
                },
                {
                    img:'./img/post3.jpg',
                    text:'Purus porta feugiats dia sed ipsum enim gravida lectus.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
                },
                {
                    img:'./img/post4.jpg',
                    text:'Purus porta feugiats dia sed ipsum enim gravida lectus.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
                },
            ]
        })
    }
    return (<AppContextCreate.Provider value={{...initalstate ,updateAbout ,updateHome,Servicesupdate}}>
         {children}
      </AppContextCreate.Provider>
    )
}

let useGlobalContext = () =>{
    return useContext(AppContextCreate);
}

export {useGlobalContext ,ContextAppProvider}