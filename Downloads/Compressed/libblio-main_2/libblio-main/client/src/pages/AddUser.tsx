import { useContext, useState } from 'react'
import { ThemeStyles } from '../App'
import Header from '../components/Header'
import CategoryComponent from '../components/CategoryComponent'
import { Typography } from '@mui/material'

interface CategoriesProps {
  category: string
}

const AddUser = () => {
  const theme: any = useContext(ThemeStyles)
  const [category, setCategory] = useState<CategoriesProps["category"]>("Select Category")
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [contact, setContact] = useState('');
  const [level, setLevel] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {name,role,contact,level});
  }

  return (
    <div className={`${theme.font} flex flex-col`}>
      <Header title="Categories" entity="Virgo Fidelis" />
      <div className=" absolute inset-0 flex items-center justify-center" style={{ top: '7em', left: '40%', background: "white" }}>
        <div className=" bg-white h-[100%]" style={{ width: '40em', height: '75vh' }}>
          <Typography variant='h4' style={{ textAlign: 'center' }}>
            New User
          </Typography>
          <form onSubmit={handleSubmit} style={{justifyContent:'center'}}>
            <div style={{ marginTop: '3.5em',marginLeft:'20%'}} className='flex flex-col'>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full names *
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='EX:John Doe'
                required
                style={{ width: '25em', height: '3em',border:"1px solid #b4b4b4", marginBottom: '1.5em' }}
              />


              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role *
              </label>
              <input
                type="text"
                name="role"
                value={role}
                style={{ width: '25em', height: '3em',border:"1px solid #b4b4b4", marginBottom: '1.5em' }}
                placeholder='Ex:Student'
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full border-gray-300 rounded-md p-2"
              />

              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                style={{ width: '25em', height: '3em', border:"1px solid #b4b4b4", marginBottom: '1.5em' }}
                value={contact}
                placeholder='EX:example@gmail.com Or 0788214345'
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full border-gray-300 rounded-md p-2"
              />

              <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                Selected Level *
              </label>
              <input
                type="text"
                name="level"
                style={{ width: '25em', height: '3em',border:"1px solid #b4b4b4", marginBottom: '1.5em' }}
                value={level}
                placeholder='Select Level'
                onChange={(e) => setLevel(e.target.value)}
                required
                className="w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div style={{marginTop:'5em',marginLeft:'25%'}} className='flex '>
            <button
                type='reset'
                style={{width:'10em',height:'3.5em',background:' #BEBEBE',borderRadius:'5px',marginRight:'1em'}}
              >
                Clear
              </button>
              <button
                type="submit"
                style={{width:'10em',height:'3.5em',background:' #35779E',borderRadius:'5px'}}
              >
                Login
              </button>
             
            </div>
            <hr style={{marginTop:'3em'}}/>
            <button style={{width:'15em',height:'3.5em',background:' #35779E',borderRadius:'3px',marginLeft:'32%',marginTop:'4em'}}>Upload All At Once</button>

          </form>
        </div>
      </div>
      <div >
        <div className={`h-[100%] w-[100%]`}>
          <CategoryComponent category={category} setCategory={setCategory} />
        </div>
      </div>
    </div>
  )
}

export default AddUser;