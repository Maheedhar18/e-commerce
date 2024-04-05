import React, { createContext, useState, useContext, useEffect } from "react";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate, Link } from "react-router-dom";

const NavBar = ({ cartItems }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    data: null,
  });

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          if (response.ok) {
            setAuth({ isAuthenticated: true, data: data });
          } else {
            // Handle error, token might be invalid or expired
            localStorage.removeItem("token");
            setAuth({ isAuthenticated: false, data: null });
          }
        } catch (error) {
          console.error("Error getting data:", error);
        }
      }
    };

    getData();
  }, []);

  const handleSignOut = () => {
    setAuth({ isAuthenticated: false, user: null });
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navigate = useNavigate();
  return (
    <div className="px-[160px] py-4 flex justify-between items-center bg-blue-400">
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate("/products");
        }}
      >
        E-cart
      </div>
      <div className="flex items-center">
        

        <div
          className="flex items-center ml-6 mr-6 cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <Badge count={cartItems.length}>
            <ShoppingCartOutlined className="text-[24px]" />
          </Badge>
        </div>

        <div className="cursor-pointer">
          <MenuOutlined />
        </div>
        {auth.isAuthenticated && (
          <>
            <div className="cursor-pointer" onClick={() => {
            navigate("/profile");
          }}>
            <UserOutlined />
            </div>
            <div>{auth.data.firstName}</div>
            <button onClick={handleSignOut} className="link">Sign Out</button>
          </>
        )}
        {!auth.isAuthenticated && (
          <>
            <button onClick={() => {navigate("/login");}} className="cursor-pointer">Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
