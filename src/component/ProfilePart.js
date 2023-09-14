import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import ChargePart from "./ChargePart";
import FooterPart from "./FooterPart";

const tbcInfo = [
  { title: "Shipper", description: "TBC" },
  { title: "Consignee", description: "TBC" },
  { title: "Modality", description: "AIR" },
  { title: "Country of Origin", description: "TBC" },
  { title: "Place of Origin", description: "TBC" },
  { title: "Port of Loading", description: "TBC" },
  { title: "Country of Dest", description: "TBC" },
  { title: "Port of Destination", description: "TBC" },
  { title: "Final Destination", description: "TBC" },
  { title: "INCO Terms", description: "TBC" },
  { title: "TransitTime", description: "TBC" },
  { title: "Is Hazardous", description: "N" },
  { title: "Cargo Value", description: "14000" },
  { title: "No of Pieces", description: "TBC" },
  { title: "Insured?", description: "N" },
];
const bodyStyles = StyleSheet.create({
  container: {
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  bodyContainer: {
    border: "2px",
    height: "700px",
    marginTop: "10px",
  },
  header: {
    alignItems: "center",
    height: "16px",
    borderBottomWidth: "1px",
    backgroundColor: "#D9D9D9",
    fontSize: "12px",
  },
  firstPart: {
    display: "flex",
    flexDirection: "row",
    height: "170px",
    borderBottomWidth: "1px",
  },
  numberPart: {
    width: "490px",
    borderRight: "1px solid",
    borderRightWidth: "1px",
  },
  tbcPart: {
    width: "550px",
  },
  numberHeaderPart: {
    height: "16px",
    borderBottomWidth: "1px",
    display: "flex",
    flexDirection: "row",
  },
  numberBodyPart: {
    height: "144px",
    borderBottomWidth: "1px",
  },
  numberFooterPart: {
    height: "10px",
    display: "flex",
    flexDirection: "row",
  },
  noPart: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    borderRightWidth: "1px",
  },
  nofontPart: {
    width: "50%",
    fontSize: "8px",
    marginLeft: "3px",
    textAlign: "left",
    marginTop: "auto",
    marginBottom: "auto",
  },
  datePart: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
  },
});
const ProfilePart = () => {
  return (
    <View style={bodyStyles.container}>
      <View style={bodyStyles.bodyContainer}>
        <View style={bodyStyles.header}>
          <Text>Quote Template</Text>
        </View>
        <View style={bodyStyles.firstPart}>
          <View style={bodyStyles.numberPart}>
            <View style={bodyStyles.numberHeaderPart}>
              <View style={bodyStyles.noPart}>
                <Text style={bodyStyles.nofontPart}>Quote No</Text>
                <Text style={bodyStyles.nofontPart}>0</Text>
              </View>
              <View style={bodyStyles.datePart}>
                <Text style={bodyStyles.nofontPart}>Date</Text>
                <Text style={bodyStyles.nofontPart}>18-Jul-2023</Text>
              </View>
            </View>
            <View style={bodyStyles.numberBodyPart}>
              <View>
                <Text style={{ fontSize: "8px" }}>To</Text>
                <Text style={{ fontSize: "10px" }}>TBC</Text>
                <Text style={{ fontSize: "9px", marginTop: "3px" }}>TBC</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  fontSize: "8px",
                  marginTop: "80px",
                }}
              >
                <Text style={{ marginRight: "10px" }}>Alt:</Text>
                <Text>TBC</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  fontSize: "8px",
                  marginTop: "10px",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "50%",
                  }}
                >
                  <Text style={{ marginRight: "15px" }}>Email:</Text>
                  <Text>TBC</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "50%",
                  }}
                >
                  <Text style={{ marginRight: "15px" }}>Tel No</Text>
                  <Text>TBC</Text>
                </View>
              </View>
            </View>
            <View style={bodyStyles.numberFooterPart}>
              <View style={{ width: "25%", borderRightWidth: "1px" }}>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "1px",
                  }}
                >
                  Actual Weight (KG)
                </Text>
              </View>
              <View style={{ width: "25%", borderRightWidth: "1px" }}>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "1px",
                    fontWeight: "900",
                  }}
                >
                  0.00
                </Text>
              </View>
              <View style={{ width: "25%", borderRightWidth: "1px" }}>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "1px",
                  }}
                >
                  Volume (Cbm)
                </Text>
              </View>
              <View style={{ width: "25%" }}>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "1px",
                    fontWeight: "900",
                  }}
                >
                  0.00
                </Text>
              </View>
            </View>
          </View>
          <View style={bodyStyles.tbcPart}>
            <View style={bodyStyles.numberHeaderPart}>
              <View
                style={{
                  width: "33.333333%",
                  borderRightWidth: "1px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Valid until
                </Text>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  25-Jul-2023
                </Text>
              </View>
              <View
                style={{
                  width: "66.666667%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Client Reference
                </Text>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  TBC
                </Text>
              </View>
            </View>
            <View
              style={{
                height: "144px",
                borderBottomWidth: "1px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "25%",
                  borderRightWidth: "1px",
                  height: "100%",
                }}
              >
                {tbcInfo.map((item) => {
                  return (
                    <Text style={{ fontSize: "8px", marginTop: "1px" }}>
                      {item.title}
                    </Text>
                  );
                })}
              </View>
              <View style={{ width: "75%", height: "100%" }}>
                {tbcInfo.map((item) => {
                  return (
                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "1px",
                        marginLeft: "1px",
                      }}
                    >
                      {item.description}
                    </Text>
                  );
                })}
              </View>
            </View>
            <View style={bodyStyles.numberFooterPart}>
              <View style={{ width: "25%", borderRightWidth: "1px" }}>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "1px",
                  }}
                >
                  Chargable weight (KG)
                </Text>
              </View>
              <View style={{ width: "75%" }}>
                <Text
                  style={{
                    fontSize: "6px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "1px",
                  }}
                >
                  0.00
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ChargePart />
        <FooterPart />
      </View>
    </View>
  );
};

export default ProfilePart;
