import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const originCharge = [
  {
    description: "EXW CHARGES",
    vatCode: "Z",
    foreignA: "0.00",
    localA: "0.00ZAR",
    vat: "",
  },
  {
    description: "AIR FREIGHT CHARGES",
    vatCode: "Z",
    foreignA: "0.00",
    localA: "0.00ZAR",
    vat: "",
  },
];

const destinationCharge = [
  {
    description: "HANDLING FEE",
    vatCode: "V",
    foreignA: "",
    localA: "ZAR",
    vat: "0.00",
  },
  {
    description: "SPLIT FEE",
    vatCode: "V",
    foreignA: "",
    localA: "ZAR",
    vat: "0.00",
  },
  {
    description: "DOCUMENTATION FEE",
    vatCode: "V",
    foreignA: "",
    localA: "ZAR",
    vat: "0.00",
  },
  {
    description: "DELIVERY CARTAGE",
    vatCode: "V",
    foreignA: "",
    localA: "ZAR",
    vat: "0.00",
  },
  {
    description: "AGENCY FEE",
    vatCode: "V",
    foreignA: "",
    localA: "ZAR",
    vat: "0.00",
  },
];

const customTaxe = [
  {
    description: "CUSTOMS VAT",
    vatCode: "Z",
    foreignA: "",
    localA: "0.00ZAR",
    vat: "32437.95",
  },
  {
    description: "CUSTOMS DUTY",
    vatCode: "Z",
    foreignA: "",
    localA: "0.00ZAR",
    vat: "",
  },
];

const bodyStyles = StyleSheet.create({
  header: {
    alignItems: "center",
    height: "16px",
    borderBottomWidth: "1px",
    backgroundColor: "#D9D9D9",
    fontSize: "12px",
  },
  chargebody: {
    height: "250px",
    borderBottomWidth: "1px",
  },
  chargeHeader: {
    height: "15px",
    display: "flex",
    flexDirection: "row",
  },
});

const ChargePart = () => {
  return (
    <>
      <View style={bodyStyles.header}>
        <Text>CHARGES</Text>
      </View>
      <View style={bodyStyles.chargebody}>
        <View style={bodyStyles.chargeHeader}>
          <View style={{ width: "41.666667%" }}>
            <Text
              style={{
                fontSize: "6px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              Description
            </Text>
          </View>
          <View style={{ width: "8.333333%" }}>
            <Text
              style={{
                fontSize: "6px",
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              VAT Code
            </Text>
          </View>
          <View style={{ width: "16.666667%" }}>
            <Text
              style={{
                fontSize: "6px",
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "center",
              }}
            >
              Foreign Amount
            </Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text
              style={{
                fontSize: "6px",
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "right",
              }}
            >
              Local Amount(Excel)CUR
            </Text>
          </View>
          <View style={{ width: "8.333333%" }}>
            <Text
              style={{
                fontSize: "6px",
                textAlign: "right",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              V.A.T
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "10px",
            backgroundColor: "#E7E6E6",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: "6px", marginTop: "auto", marginBottom: "auto" }}
          >
            ORIGIN & FREIGHT CHARGES
          </Text>
        </View>
        {originCharge.map((item) => {
          return (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ width: "41.666667%" }}>
                <Text style={{ fontSize: "8px" }}>{item.description}</Text>
              </View>
              <View style={{ width: "8.333333%" }}>
                <Text style={{ fontSize: "8px", textAlign: "center" }}>
                  {item.vatCode}
                </Text>
              </View>
              <View style={{ width: "16.666667%" }}>
                <Text style={{ fontSize: "8px", textAlign: "center" }}>
                  {item.foreignA}
                </Text>
              </View>
              <View
                style={{
                  width: "25%",
                }}
              >
                <Text style={{ fontSize: "8px", textAlign: "right" }}>
                  {item.localA}
                </Text>
              </View>
              <View
                style={{
                  width: "8.333333%",
                  textAlign: "right",
                }}
              >
                <Text style={{ fontSize: "8px" }}>{item.vat}</Text>
              </View>
            </View>
          );
        })}
        <View
          style={{
            height: "10px",
            backgroundColor: "#E7E6E6",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: "6px", marginTop: "auto", marginBottom: "auto" }}
          >
            DESTINATION CHARGES
          </Text>
        </View>
        {destinationCharge.map((item) => {
          return (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ width: "41.666667%" }}>
                <Text style={{ fontSize: "8px" }}>{item.description}</Text>
              </View>
              <View style={{ width: "8.333333%" }}>
                <Text style={{ fontSize: "8px", textAlign: "center" }}>
                  {item.vatCode}
                </Text>
              </View>
              <View style={{ width: "16.666667%" }}>
                <Text style={{ fontSize: "8px", textAlign: "center" }}>
                  {item.foreignA}
                </Text>
              </View>
              <View
                style={{
                  width: "25%",
                }}
              >
                <Text style={{ fontSize: "8px", textAlign: "right" }}>
                  {item.localA}
                </Text>
              </View>
              <View
                style={{
                  width: "8.333333%",
                  textAlign: "right",
                }}
              >
                <Text style={{ fontSize: "8px" }}>{item.vat}</Text>
              </View>
            </View>
          );
        })}
        <View
          style={{
            height: "10px",
            backgroundColor: "#E7E6E6",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: "6px", marginTop: "auto", marginBottom: "auto" }}
          >
            CUSTOMS TAXES
          </Text>
        </View>
        <View>
          {customTaxe.map((item) => {
            return (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: "41.666667%" }}>
                  <Text style={{ fontSize: "8px" }}>{item.description}</Text>
                </View>
                <View style={{ width: "8.333333%" }}>
                  <Text style={{ fontSize: "8px", textAlign: "center" }}>
                    {item.vatCode}
                  </Text>
                </View>
                <View style={{ width: "16.666667%" }}>
                  <Text style={{ fontSize: "8px", textAlign: "center" }}>
                    {item.foreignA}
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
                  }}
                >
                  <Text style={{ fontSize: "8px", textAlign: "right" }}>
                    {item.localA}
                  </Text>
                </View>
                <View
                  style={{
                    width: "8.333333%",
                    textAlign: "right",
                  }}
                >
                  <Text style={{ fontSize: "8px" }}>{item.vat}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            height: "10px",
            backgroundColor: "#E7E6E6",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: "6px", marginTop: "auto", marginBottom: "auto" }}
          >
            ADDITIONAL CHARGES
          </Text>
        </View>
      </View>
    </>
  );
};

export default ChargePart;
