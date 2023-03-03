import React, { useEffect, useState } from 'react'
import Img from '../assets/23.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { Font, Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer'
import Button from './button/Button'




Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
})

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'center',
        //   fontFamily:'Roboto',
    },
    header: {
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey'
    },
    image: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    },
    name: {
        margin: 5
    },
    contentView: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    contant: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 5
    }

})


function Report() {

    const [question, setQuestion] = useState<any[]>([])
    const [contents, setContents] = useState<any[]>([])
    const [clauses, setClauses] = useState<any[]>([])
    const navigate = useNavigate()

    const location = useLocation();
    // useEffect(()=>{
    var data = location.state.data.clauses
    console.log(data);

    // setClauses(data);

    //     data.map((clause:any,i:number)=>{
    //         console.log(clause.hasQuestion);
    //         if(clause.hasQuestion){
    //         setQuestion((oldQuestion)=>[...oldQuestion , clause])
    //         console.log(question);

    //     }else{
    //         // console.log('no question');
    //         setContents((oldContent) => [...oldContent, clause])
    //         console.log(contents);

    //     }


    // })
    // },[])
    // console.log(location.state.data);
    // console.log(data.hasQuestion);

    const displayContents = () => {
        return data.map((claus: any, i: any) => {
            // console.log('hello', claus);
            const margin = 15 * claus._id
            // console.log(margin);
        
            return (<>
                <View style={styles.contentView}>
                    <Text style={{
                        fontSize: 13,
                        marginTop: 5,
                        marginRight: 4,
                        marginBottom: 4,
                        marginLeft:`${margin}`

                    }}>
                         {claus.name}  {`${'\n'}`}
                     </Text>

                    {claus.children ? claus.children.map((child: any, i: number) => {
                        return (<>
                            <Text style={{
                                marginTop: 4,
                                marginRight: 4,
                                marginBottom: 4,
                                marginLeft:210,
                                padding: 20,
                            }}>
                                {`${'\n'}`}
                                {child.number}
                                {`${'\n'}`}
                            </Text>
                            {
                                child.children ? child.children.map((c: any) => {
                                    return (<Text style={{ marginTop: 4,
                                        marginRight: 4,
                                        marginBottom: 4,
                                        marginLeft:210,
                                        padding: 20, }}> {`${'\n'}`} {c.number} {`${'\n'}`}</Text>)
                                }) : console.log('m')
                            }
                        </>
                        )
                    }) : ''}

                </View>
            </>
            )

        })
    }

    const displayQuestion = () =>{
        return data.map((claus:any,i:number)=>{
              return(
              <>
                  <View style={styles.contentView} break>
                    <Text style={{
                         marginTop: 4,
                         marginRight: 4,
                         marginBottom: 4,
                         padding: 20,
                    }}>  {claus.number} {`${'\n'}`}</Text>
                      {
                        claus.children.map((child:any)=>{
                         return(<>
                        
                             <Text style={{
                                 marginTop: 4,
                                 marginRight: 4,
                                 marginBottom: 4,
                                 padding: 20,
                             }}> {`${'\n'}`} {child.number} {`${'\n'}`}</Text>
                             {child.children 
                             
                             ? 
                               child.children.map((quest:any,i:number)=>{
                                        //  console.log(quest.question ? quest.question : 'no question' )
                                         return(<>
                                            {/* <Text>{quest.number}</Text> */}
                                            {/* <Text>{quest.question}</Text> */}
                                         </>)
                                         
                             }) 
                             : console.log('no')}
                             
                             </>)  
                            })
                        }
                  
                  
                  
                  
                  </View>

              </>
              )
        })
    }

    return (
        <div className="mx-auto w-[1240px] my-8">
            {/* <Button className='bg-slate-500 w-14 rounded-md' onClick={()=>navigate('/userdashboard')} text='Back' type='' /> */}
            <PDFViewer
                className="m-auto bg-transparent"
                width={500}
                height={700}
            //  showToolbar={false}
            //  style={{ backgroundColor: 'white' }}
            >
                <Document>
                    <Page style={styles.body}>
                        <Text style={styles.header} fixed>Created With The Audit Master</Text>
                        {/* <img src={Img} alt="" /> */}
                        <Image style={styles.image} src={Img} />
                        <Text style={styles.name} >Standard : {location.state.data.standard}</Text>
                        <Text style={styles.name} >nonConformities : {location.state.data.nonConformities}</Text>
                        <Text style={styles.name} >Score : {location.state.data.score}</Text>
                        <Text style={styles.text}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus, eaque nemo laudantium tenetur placeat voluptate molestiae, eius temporibus perferendis natus possimus odio et sequi officiis tempore ullam nihil! Ea!
                        </Text>
                        <Text style={styles.contant} break>
                            Table of Contents
                        </Text>
                        <Text>
                            {displayContents()}   
                        </Text>
                            <>
                            {displayQuestion()}
                            </>
                        <Text
                            style={styles.pageNumber}
                            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
                            fixed
                        />
                    </Page>
                </Document>
            </PDFViewer>
        </div>

    )
}

export default Report