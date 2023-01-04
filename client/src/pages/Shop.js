import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Pages from "../components/Pages";
import DeviceList from "../components/DeviceList";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} =useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(
            device.selectedType.id, 
            device.selectedBrand.id, 
            device.page, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Form className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <BrandBar />
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Form>
        </Container>
    );
});


export default Shop;