import {
  useCallback,
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  useState,
  Fragment,
} from "react";
import ShipmentCard from "../../layouts/common/ShipmentCard";
import { Box, Chip, Grid, Pagination } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import UrlSlugs from "../../utils/dataTypes/UrlSlugs";
import { useLazyGetAllOrSearchMyShipmentsQuery } from "../../services/shipmentService";
import PageHeroContainer from "../../layouts/common/PageHeroContainer";
import { LoadingButton } from "@mui/lab";
import SearchField from "../../components/core/SearchField";
import Shipments from "../../utils/dataTypes/Shipment";
import ShipmentFormPopup from "./ShipmentFormPopup";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? "1") || 1;

  const [value, setValue] = useState(searchParams.get("value") || "");
  const [shipmentFormPopup, setShipmentFormPopup] = useState<{
    data: Shipments | null;
    open: boolean;
  }>({
    data: null,
    open: false,
  });

  const handleClickOpen = (data: Shipments | null) => () => {
    setShipmentFormPopup((preState) => ({ ...preState, open: true, data }));
  };

  const handleClose = () => {
    setShipmentFormPopup((preState) => ({ ...preState, open: false }));
  };

  const [getAllorSearchShipments, { isLoading, isFetching, data }] =
    useLazyGetAllOrSearchMyShipmentsQuery();

  useEffect(() => {
    getAllorSearchShipments({ page, size: 20 });
  }, [page, getAllorSearchShipments]);

  const handleFetchMore = useCallback(
    (e: ChangeEvent<unknown>, nextPage: number) =>
      navigate(`${UrlSlugs.HOME}?page=${nextPage}`),
    [navigate]
  );

  const handleSearch = useCallback(
    () => getAllorSearchShipments({ page: 1, size: 20, search: value }),
    [getAllorSearchShipments, value]
  );

  return (
    <Fragment>
      <PageHeroContainer
        heading="My Shipments"
        description="Your shipments list for courier trackings!"
        badge={<Chip color="primary" label={data?.pagination?.totalRecords} />}
      >
        <Fragment>
          <Box maxWidth="300px" width="100%">
            <SearchField
              placeholder="Tracking No"
              disabled={isFetching}
              value={value}
              onChange={(e: SyntheticEvent) =>
                setValue((e.target as any).value ?? "")
              }
            />
          </Box>
          <LoadingButton
            loading={isFetching}
            sx={{ px: 3 }}
            variant="contained"
            fullWidth={false}
            onClick={handleSearch}
          >
            Search
          </LoadingButton>
          <LoadingButton
            loading={isFetching}
            sx={{ px: 3 }}
            variant="contained"
            fullWidth={false}
            onClick={handleClickOpen(null)}
          >
            New
          </LoadingButton>
        </Fragment>
      </PageHeroContainer>
      {!isLoading && !isFetching && data?.data?.length === 0 && (
        <Box
          display="grid"
          width="100%"
          height="300px"
          sx={{ placeContent: "center" }}
        >
          <span>No Shipments found!</span>
        </Box>
      )}
      <Grid container spacing={1} mt={3}>
        {data?.data.map((shipment: any) => (
          <Grid key={shipment.id} item xs={12} sm={6} md={4} xl={3}>
            <ShipmentCard {...shipment} onClick={handleClickOpen(shipment)} />
          </Grid>
        ))}
      </Grid>
      {!isLoading && !isFetching && data?.pagination?.totalPages > 1 && (
        <Box display="flex" justifyContent="flex-end" mt={3}>
          {data?.pagination?.totalPages > 1 && (
            <Pagination
              disabled={Boolean(isLoading || isFetching)}
              page={data?.pagination?.currentPage}
              count={data?.pagination?.totalPages}
              onChange={handleFetchMore}
              variant="outlined"
              shape="rounded"
            />
          )}
        </Box>
      )}
      <ShipmentFormPopup {...shipmentFormPopup} handleClose={handleClose} />
    </Fragment>
  );
};
export default DashboardPage;
