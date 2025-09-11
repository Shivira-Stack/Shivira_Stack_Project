import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
function ClientBooking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "booking-appointment" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <Cal
            namespace="booking-appointment"
            calLink="shivira-stack/booking-appointment"
            style={{ width: "100%", height: "100%", overflow: "scroll", borderRadius: '20px' }}
            config={{ "layout": "month_view" }}
        />
    );
}

export default ClientBooking;
