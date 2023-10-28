import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./api";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import ApiSlugs from "../utils/dataTypes/ApiSlugs";

export const shipmentService = createApi({
  reducerPath: "shipmentService",
  baseQuery: baseQuery,
  tagTypes: ["Shipments"],
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getAllOrSearchMyShipments: builder.query({
      query: (data) =>
        `${ApiSlugs.SHIPMENT}?${data.search ? "search=" + data.search : ""}${
          data.page ? "&page=" + data.page : ""
        }${data.size ? "&size=" + data.size : ""}`,
      providesTags: ["Shipments"],
    }),

    createShipment: builder.mutation({
      query: (data) => ({
        url: ApiSlugs.SHIPMENT,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Shipments"],
    }),

    updateShipment: builder.mutation({
      query: (data) => ({
        url: ApiSlugs.SHIPMENT,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Shipments"],
    }),

    changeShipmentStatus: builder.mutation({
      query: (data) => ({
        url: ApiSlugs.SHIPMENT,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
    useLazyGetAllOrSearchMyShipmentsQuery,
    useCreateShipmentMutation,
    useUpdateShipmentMutation,
    useChangeShipmentStatusMutation
} = shipmentService;
