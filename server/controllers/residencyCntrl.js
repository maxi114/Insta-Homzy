import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

//function to create residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({ message: "residency created succesfully", residency });
  } catch (err) {
    if (err.code === "p2002") {
      throw new Error("A residecy with address already exists");
    }
    throw new Error(err.message);
  }
});

//function to get all the residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.send(residencies);
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to get a specific residency
export const getResidency = asyncHandler(async (req, res)=>{
    const {id} = req.params;

    try {
        
        const residecy = await prisma.residency.findUnique({
            where: {id}
        })
        res.send(residecy)
    } catch (err) {
        throw new Error(err.message)
    }

})
