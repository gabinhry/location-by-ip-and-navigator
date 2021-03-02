import React from "react";

// prompt denied granted
export const getGeolocationPermission = async () => {
    const permission = await navigator.permissions.query({
        name: "geolocation"
    });
    return permission.state;
};

export const getLocation = async callback => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
            callback({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
        return true;
    } else {
        return false;
    }
};

export const computeDistance = (lat1, lat2, lon1, lon2) => {
    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(lat1) *
        Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
};

const toRad = Value => {
    return (Value * Math.PI) / 180;
};
