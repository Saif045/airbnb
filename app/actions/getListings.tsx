import React from "react";
import prisma from "../libs/prismaDb";

export default async function getListings() {
  try {
    const listing = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListing = listing.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListing;
  } catch (error: any) {
    throw new Error(error);
  }
}
