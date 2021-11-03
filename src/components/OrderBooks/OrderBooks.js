import { FaTrashAlt } from "react-icons/fa";
const OrderBooks = ({title, status, location, date, ticket, phone, id}) => {

    const handleBooksDelete = () => {
        const proceed = window.confirm('Are Your Sure Want to Delete ??');
        if(proceed) {
            fetch(`https://ghastly-broomstick-24724.herokuapp.com/bookDelete/${id}`, {
                method:'DELETE',
            })
            .then( res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Your Package Successfully Deleted');
                }
            })
        }
    }
    
    return (
        <div> 
            <div className='flex justify-between'>
                <h1 className="text-2xl">{title}</h1>
                <h1 className="text-2xl bg-red-300 py-1 px-3 text-blue-700">{status}</h1>
            </div>
            <div>
                <h1 className='text-x'>Date: {date}</h1>
                <h1 className='text-x'>Location: {location}</h1>
                <h1 className='text-x'>Ticket_Type: {ticket}</h1>
            </div>
            <div className='flex justify-end'>
                <button onClick={handleBooksDelete} className='px-3 py-2 hover:bg-red-600 transition hover:text-white '>
                <FaTrashAlt className='text-2xl text-red-600 hover:text-white transition' />
               </button>
            </div>
        </div>
    );
};

export default OrderBooks;