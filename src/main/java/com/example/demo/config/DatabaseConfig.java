package com.example.demo.config;
import java.sql.*;

public class DatabaseConfig {
	
	 private static final String DB_URL = "jdbc:mysql://localhost:3306/mini_project";
	    private static final String DB_USER = "root"; 
	    private static final String DB_PASSWORD = "Cherie@9363"; 

	    public static Connection getConnection() {
	        Connection connection = null;
	        try {
	            Class.forName("com.mysql.cj.jdbc.Driver"); 
	            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	        } catch (ClassNotFoundException | SQLException e) {
	            e.printStackTrace();
	        }
	        return connection;
	    }

}
