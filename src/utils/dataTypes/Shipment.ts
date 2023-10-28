export type ShipmentType = "Standard" | "Express" | "International";

export type ShipmentMethod = "Ground" | "Air" | "Ocean";

export type ShipmentStatus = "Pending" | "InTransit" | "Delivered";

export type ShipmentDetails = {
  type: ShipmentType;
  method: ShipmentMethod;
  pickupDateAndTime?: string;
  pickupLocation?: string;
  expectedDeliveryDateAndTime?: string;
  deliveryLocation?: string;
  descriptions?: string;
  documents?: string;
  paymentInfo?: string;
  remarks?: string;
};
type Shipments = {
  id: string;
  trackingNo:string;
  recipientFullName: string;
  recipientAddress: string;
  shipmentDetails: ShipmentDetails;
  status: ShipmentStatus;
  createdAt:string;
  updatedAt:string;
};

export default Shipments;
