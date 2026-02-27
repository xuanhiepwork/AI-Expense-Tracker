import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    header: { padding: 20, backgroundColor: '#0047AB', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 60 },
    welcomeText: { color: '#fff', fontSize: 18, marginBottom: 15 },
    balanceCard: { backgroundColor: '#fff', padding: 20, borderRadius: 20, elevation: 5 },
    balanceAmount: { fontSize: 32, fontWeight: 'bold', color: '#111827' },
    historyContainer: { paddingHorizontal: 20, paddingBottom: 20 },
    historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 15 },
    micWrapper: { alignItems: 'center', marginTop: 20, marginBottom: 40 },
    micButton: { backgroundColor: '#4F46E5', width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', zIndex: 2 },
    micRing: { position: 'absolute', width: 100, height: 100, borderRadius: 50, backgroundColor: '#E0E7FF', top: -10 },
    micHint: { marginTop: 15, fontWeight: '600', color: '#1F2937' },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
    modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 24, alignItems: 'center' },
    modalHandle: { width: 40, height: 4, backgroundColor: '#E5E7EB', borderRadius: 2, marginBottom: 20 },
    modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginBottom: 20 },
    inputField: { width: '100%', backgroundColor: '#F9FAFB', padding: 16, borderRadius: 16, marginBottom: 20 },
    fieldValue: { fontSize: 16, fontWeight: '600' },
    btnSave: { width: '100%', backgroundColor: '#10B981', padding: 16, borderRadius: 16, alignItems: 'center' },
    btnTextSave: { color: '#fff', fontWeight: 'bold' },

});