import React, { useState, useContext } from 'react';
import { ThemeStyles } from '../App'
import Header from '../components/Header';
import 'tailwindcss/tailwind.css';
import { Typography,useMediaQuery } from '@mui/material';
import styles from '../styles';
import { Done } from '@mui/icons-material';



const CheckOut = () => {
    const theme: any = useContext(ThemeStyles)
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [role, setRole] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [ISBN, setISBN] = useState('');
    const [status, setStatus] = useState('');
    const isMobileScreen = useMediaQuery("(max-width:1200px");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { name, author, quantity, role, bookTitle, ISBN, status });
    }
    return (
        <div className={`${theme.font} w-[100%] h-[100%] flex flex-col`}>
            <Header title="Categories" entity="Virgo Fidelis" />
            <div className={`${styles.flexCenter} w-[100%] h-[100%] px-[50%] py-[1rem]`}>
                <div
                    className={`${theme.background2} ${theme.font} ${styles.flexColBetween} w-[100%] h-[100%]`}
                >
                    <div className={`${styles.flexBetween} w-[60%] py-[1.8em] px-[3%]`}>
                        <div className={`${isMobileScreen && "w-[65%]"} flex justify-center items-center h-screen`}>

                            <form className={`w-[100%] h-[100%] `} style={{marginTop:'2em'}} method='POST' onSubmit={handleSubmit}>
                                <Typography variant='h3' style={{textAlign:'center'}}>
                                    Check Out
                                </Typography>
                                <div  className='flex ' style={{marginTop:'5em'}}>
                                    <div className='flex flex-col' style={{marginRight:'5em'}}>
                                        <label className={`block`}>Full Name</label>
                                        <input placeholder='EX:John Doe'  style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}} onChange={(e) => setName(e.target.value)} />
                                        <label className="block">Date</label>
                                        <input placeholder='23/01/2023'  style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}}  type='date'/>
                                        <label className="block">Author</label>
                                        <input placeholder='EX:John Cathy' type='text'   style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}}  onChange={(e) => setAuthor(e.target.value)} />
                                        <label className="block">Quantity</label>
                                        <input placeholder='EX:32' type='number'  style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}}  onChange={(e) => setQuantity(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col' >
                                        <label className="block">Role</label>
                                        <input placeholder='EX:Student'  style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}}  onChange={(e) => setRole(e.target.value)} />
                                        <label className="block">Book Title</label>
                                        <input placeholder='EX:Mathematics'  style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}}  onChange={(e) => setBookTitle(e.target.value)} />
                                        <label className="block">ISBN</label>
                                        <input placeholder='EX:124-234-354-644-4558'  style={{width:'25em',height:'3em',background:'#ccc',marginBottom:'2.5em'}}  onChange={(e) => setISBN(e.target.value)} />
                                        <label className="block">Status</label>
                                        <div>
                                        <input type='radio' value={'good'} id='good' className='' onChange={(e) => setStatus(e.target.value)} /><label id='good'>Good</label>
                                        <input type='radio' value={'medium'} id='medium' className='label' onChange={(e) => setStatus(e.target.value)} /><label id='medium'>Medium</label>
                                        <input type='radio' value={'damaged'} id='damaged' className='label' onChange={(e) => setStatus(e.target.value)} /><label id='damaged'>Damaged</label>
                                       
                                        </div>
                                        </div>
                                        
                                </div>
                                        <div style={{marginLeft:'40%',marginTop:'3em'}} className='flex '>
                                            <button type='submit' value={'done'} style={{width:'10em',height:'3.5em',background:' #35779E',marginRight:'1em',borderRadius:'5px'}}>Done</button>
                                            <button type='reset' value={'clear'} style={{width:'10em',height:'3.5em',background:' #BEBEBE',borderRadius:'5px'}}>Clear</button>
                                        </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut;

