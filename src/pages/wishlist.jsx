import { useStore } from "../context/StoreContext.jsx";
import Nav from '../components/header/navbarapp.jsx'
import Footer from '../components/footer/footer.jsx'

const WishlistPage = () => {
  // event.preventDefualt();
  
  const { wishlist, removeFromWishlist } = useStore();

  return (
   
    <div className="flex flex-col justify-between h-auto">
       <Nav />
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">My Wishlist
       
        </h1>
      {wishlist.length === 0 && <p>No items yet ❤️</p>}
      <ul>
        {wishlist.map((item) => (
          // <li key={item.id} className="flex justify-between border-b py-2">
             <li key={item.id} className="flex items-center justify-between border-b py-2 ">
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
        <span>{item.name}</span>
      </div>
      <span className="text-red-500 ">{item.price}</span>

            <button 
              onClick={() => removeFromWishlist(item.id)} 
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;
