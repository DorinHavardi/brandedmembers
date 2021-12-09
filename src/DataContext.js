import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const DataContext = createContext();
export default function DataContextProvider(props) {
  let history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [age, setAge] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState([
    { email: "admin@admin.com", password: "Admin@123", age: 1, isAdmin: true },
  ]);
  const [products, setProducts] = useState([
    {
      id: 1,
      brand: "Adidas",
      model: "NMD",
      price: 78,
      img: "https://images.footlocker.com/is/image/EBFL2/FW0706?wid=300&hei=300&fmt=png-alpha",
    },
    {
      id: 2,
      brand: "Nike",
      model: "Hurrache",
      price: 99,
      img: "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Huarache-DNA-CH1-Royal-2_5000x.png?v=1583257872",
    },
    {
      id: 3,
      brand: "Vans",
      model: "Old Skool",
      price: 75,
      img: "https://cdn.shoplightspeed.com/shops/607275/files/28636239/650x750x2/vans-comfycush-old-skool-shoes.jpg",
    },
    {
      id: 4,
      brand: "Adidas",
      model: "Campus",
      price: 63,
      img: "https://content.rezetstore.dk/sites/default/files/PIM-images/adidas/1560131/adidas-campus-grethrftwwhtcwhite-1560131-v1-637123.png",
    },
    {
      id: 5,
      brand: "Vans",
      model: "Authentic",
      price: 55,
      img: "https://www.thenextsole.com/storage/images/VN0A348A3XV.png",
    },
  ]);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [ageError, setAgeError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [stockError, setStockError] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  //Register
  const signUp = (email, password, confirmPassword, age) => {
    for (let i = 0; i < user.length; i++) {
      const registeredUser = user[i].email;
      if (
        email === null ||
        !/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)
      ) {
        setEmailError("Invalid Email");
      } else if (age === null || age.length > 2) {
        setAgeError("Invalid age");
      } else if (
        password === null ||
        confirmPassword === null ||
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
      ) {
        setPasswordError("Invalid Password");
      } else if (confirmPassword !== password) {
        setPasswordError("Passwords doesn't match");
      } else if (email !== registeredUser) {
        let temp = [...user, { email, password, age, isAdmin }];
        setUser(temp);
        history.push(`/Store`);
      } else {
        setEmailError("User already registered");
      }
    }
  };

  //Login
  const login = (email, password) => {
    if (email !== null && password !== null) {
      for (let i = 0; i < user.length; i++) {
        if (email === user[i].email && password === user[i].password) {
          if (user[i].isAdmin === true) {
            history.push(`/Admin`);
          } else {
            history.push(`/Store`);
          }
        } else {
          setEmailError("Some of the details may be wrong");
          setPasswordError("Please try again or Register");
        }
      }
    } else {
      setPasswordError("Email or Password are invalid");
      setEmailError("Email or Password are invalid");
    }
  };

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const addToStock = (brand, model, price) => {
    if (brand === null) {
      setStockError("Field is required");
    } else if (model === null) {
      setStockError("Field is required");
    } else if (price === null) {
      setStockError("Field is required");
    } else
      setProducts([...products, { brand: brand, model: model, price: price }]);
  };

  const removeFromStock = (product) => {
    const tempStock = products.filter((x) => x.id !== product.id);

    setProducts(tempStock);
  };
  const removeFromMembers = (user) => {
    const tempMembers = user.filter((x) => x.id !== user.id);

    setUser(tempMembers);
  };

  return (
    <DataContext.Provider
      value={{
        signUp,
        login,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        ageError,
        setAgeError,
        stockError,
        setStockError,
        email,
        setEmail,
        age,
        setAge,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        user,
        setUser,
        products,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        addToStock,
        removeFromStock,
        removeFromMembers,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
