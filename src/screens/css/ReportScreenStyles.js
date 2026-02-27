// === SECTION 1: IMPORTS ===
import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

// === SECTION 2: STYLE DEFINITIONS ===
export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    blueHeader: { backgroundColor: COLORS.primary, padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', borderBottomLeftRadius: 32, borderBottomRightRadius: 32, paddingBottom: 40 },
    headerInfo: { flex: 1, paddingHorizontal: 15 },
    headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    headerSubtitle: { color: COLORS.primaryLight, fontSize: 12 },
    backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
    monthPicker: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, flexDirection: 'row', alignItems: 'center' },
    monthText: { color: '#fff', fontSize: 12 },

    content: { padding: 16 },

    summaryRow: { flexDirection: 'row', gap: 10, marginBottom: 20, marginTop: -8 },
    summaryCard: { flex: 1, padding: 12, borderRadius: 20, elevation: 4 },
    sumLabel: { color: '#fff', fontSize: 10, opacity: 0.8 },
    sumValue: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 4 },

    whiteCard: { backgroundColor: COLORS.cardBg, padding: 20, borderRadius: 24, marginBottom: 20, elevation: 2 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    cardTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.textMain },
    badgeText: { fontSize: 12, color: COLORS.primary, backgroundColor: COLORS.primaryLight, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },

    mainProgressBg: { height: 12, backgroundColor: COLORS.border, borderRadius: 6, marginVertical: 15, overflow: 'hidden' },
    mainProgressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 6 },

    categoryProgressRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
    catLabel: { width: 70, fontSize: 12, color: COLORS.textSub },
    miniBarBg: { flex: 1, height: 6, backgroundColor: COLORS.border, borderRadius: 3, marginHorizontal: 10, overflow: 'hidden' },
    miniBarFill: { height: '100%', borderRadius: 3 },
    catPercent: { width: 30, fontSize: 12, color: COLORS.textLight, textAlign: 'right' },

    sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, marginTop: 10 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.textMain },

    countBadge: { backgroundColor: COLORS.dangerLight, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 8 },
    countText: { color: COLORS.danger, fontSize: 12, fontWeight: 'bold' },

    alertCard: { padding: 16, borderRadius: 20, borderLeftWidth: 4, borderColor: COLORS.dangerLight, marginBottom: 10, backgroundColor: COLORS.dangerLight },
    alertText: { fontWeight: 'bold', color: COLORS.danger }, // Dùng màu danger đậm hơn cho chữ
    alertSub: { fontSize: 12, color: COLORS.danger, marginTop: 4 },

    suggestionCard: { flexDirection: 'row', backgroundColor: COLORS.successLight, padding: 16, borderRadius: 20, alignItems: 'center', gap: 12 },
    suggestIcon: { width: 28, height: 28, borderRadius: 14, backgroundColor: COLORS.success, justifyContent: 'center', alignItems: 'center' },
    suggestTitle: { fontSize: 14, color: COLORS.success, fontWeight: '500' }, // Dùng màu xanh lá đậm
    suggestAmount: { fontSize: 12, color: COLORS.success, marginTop: 2 },
});