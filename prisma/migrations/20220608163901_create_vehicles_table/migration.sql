-- CreateTable
CREATE TABLE "Vehicles" (
    "model" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("plateNumber")
);
