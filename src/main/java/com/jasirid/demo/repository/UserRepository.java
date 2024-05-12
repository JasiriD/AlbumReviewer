package com.jasirid.demo.repository;

import com.jasirid.demo.entity.User;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

//Extending JpaRepository interface. We pass the type of the entity (user class) and the data class of the id (int)
//I believe this allows the UserRepository interface to perform CRUD operations on our User Jpa entity.
//There is no @repository annotation here because JpaRepository already contains it.
public interface UserRepository extends JpaRepository <User, Integer>{

}
