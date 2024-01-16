import { BG_COLOR } from "@/constants/bg.constants";
import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 12,
        backgroundColor: BG_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export function PdfFooter() {
    return <View style={styles.footer} fixed>

    </View>
}