import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const FooterPart = () => {
  return (
    <>
      <View
        style={{
          alignItems: "center",
          height: "10px",
          borderBottomWidth: "1px",
          backgroundColor: "#D9D9D9",
          fontSize: "12px",
        }}
      ></View>
      <View style={{ display: "flex", flexDirection: "row", height: "64px" }}>
        <View
          style={{
            width: "45%",
            height: "64px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: "8px",
              marginTop: "5px",
            }}
          >
            Foreign Currency Breakdown (Totals)
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              fontSize: "6px",
              marginTop: "5px",
            }}
          >
            <View style={{ width: "25%" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ marginRight: "10px" }}>USD</Text>
                </View>
                <View style={{ marginLeft: "auto", marginRight: "auto" }}>
                  <Text style={{ textAlign: "center" }}>14.0</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "2px",
                }}
              >
                <View>
                  <Text style={{ marginRight: "10px" }}>EUR</Text>
                </View>
                <View style={{ marginLeft: "auto", marginRight: "auto" }}>
                  <Text style={{ textAlign: "center" }}>-</Text>
                </View>
              </View>
            </View>
            <View style={{ width: "25%" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ alignItems: "center" }}>GBP</Text>
                </View>
                <View style={{ alignItems: "right" }}>
                  <Text style={{ textAlign: "right" }}>-</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "2px",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>OTHER</Text>
                </View>
                <View style={{ alignItems: "right" }}>
                  <Text style={{ textAlign: "right" }}>-</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "row",
            fontSize: "8px",
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text
              style={{
                textAlign: "right",
              }}
            >
              SUBTOTAL (EXCL VAT) :
            </Text>

            <Text
              style={{
                textAlign: "right",
              }}
            >
              VAT:
            </Text>

            <Text
              style={{
                textAlign: "right",
              }}
            >
              TOTAL (INCL VAT):
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              ZAR
            </Text>

            <Text
              style={{
                textAlign: "center",
              }}
            >
              ZAR
            </Text>

            <Text
              style={{
                textAlign: "center",
              }}
            >
              ZAR
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: "8px",
            marginTop: "10px",
            textDecoration: "underline",
          }}
        >
          REMARKS:
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: "8px",
            marginTop: "85px",
            textDecoration: "underline",
          }}
        >
          IMPORTANT NOTICE:
        </Text>
      </View>
      <View
        style={{
          fontSize: "8px",
        }}
      >
        <Text>
          All our services are strictly subject the provisions of Shippler (Pty)
          Ltd standard Trading terms and Conditions, a copy of which is
          available on request.
        </Text>
        <Text>
          By accepting any quote or instructing Shippler (Pty) Ltd to perform
          any function or carry out any service (etc) you will be considered to
          have agreed to be bound by Shippler (Pty) Ltd standard Trading Terms
          and Conditions.
        </Text>
        <Text>
          The above is an estimate only and not a binding quotation. All
          estimates subject to change with or without prior notice.
        </Text>
        <Text>
          If you are shipping cargo based on this estimate, please forward a
          copy of this estimate with your shipping instruction.
        </Text>
        <Text>
          All information and rates contained in this estimate are strictly
          confidential.
        </Text>
      </View>
    </>
  );
};

export default FooterPart;
