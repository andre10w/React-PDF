import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

import ProfilePart from "./ProfilePart";
import ChargePart from "./ChargePart";

const fontStyles = StyleSheet.create({
  vat: {
    fontSize: "8px",
  },
});

const imageStyles = StyleSheet.create({
  image: {
    width: "120px",
    height: "65px",
    // marginTop: "40px",
  },
});

const pdfStyles = StyleSheet.create({
  background: {
    width: 1200,
    height: 950,
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  itemText: {
    flex: 1,
    textAlign: "right",
    margin: "auto",
    marginTop: "15px",
    color: "#47517B",
  },
  itemImage: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px",
  },
});

const DocumentRender = () => {
  return (
    <div className="mt-5">
      <PDFViewer style={pdfStyles.background}>
        <Document>
          <Page>
            <View style={styles.container}>
              {/* <Image style={imageStyles.image} src="./target001.png" /> */}
              <View style={styles.itemImage}>
                <Image style={imageStyles.image} src="./shipper.png" />
              </View>
              <View style={styles.itemText}>
                <Text style={fontStyles.vat}>
                  Shippler (Pty) Ltd. VAT no: 4400267144
                </Text>
                <Text style={fontStyles.vat}>Reg no: 2014/077562/07</Text>
                <Text style={fontStyles.vat}>
                  Tel: 010 006 5575 Email: support@shippler.co.za
                </Text>
                <Text style={fontStyles.vat}>
                  Clearwater officepark, Building 5,
                </Text>
                <Text style={fontStyles.vat}>
                  Cnr Millennium rd & Christiaan deWet rd, Roodepoort 1709
                </Text>
                <Text style={fontStyles.vat}>www.shippler.co.za</Text>
              </View>
            </View>
            <ProfilePart />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default DocumentRender;
