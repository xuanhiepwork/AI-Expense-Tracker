import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8FAFC' },
    blueHeader: { backgroundColor: '#4F46E5', padding: 20, paddingTop: 50, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, paddingBottom: 30 },
    headerTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    headerSub: { color: '#E0E7FF', fontSize: 13, marginTop: 4 },

    createBtn: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.2)', padding: 15, borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.4)', borderStyle: 'dashed', marginBottom: 20 },
    createBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
    iconPlusBox: { backgroundColor: '#fff', borderRadius: 8, padding: 2 },

    tabRow: { flexDirection: 'row', gap: 10 },
    tabActive: { backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
    tabInactive: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
    tabTextActive: { color: '#4F46E5', fontWeight: 'bold' },
    tabTextInactive: { color: '#fff', fontWeight: 'bold' },

    searchContainer: { padding: 20, marginTop: -25 },
    searchBar: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 16, alignItems: 'center', elevation: 2 },
    searchInput: { flex: 1, marginLeft: 10, fontSize: 15, color: '#1F2937' },

    listHeader: { paddingHorizontal: 20, marginBottom: 15 },
    listTitle: { color: '#6B7280', fontSize: 12, fontWeight: 'bold' },

    grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between' },
    card: { width: '48%', backgroundColor: '#fff', padding: 20, borderRadius: 24, alignItems: 'center', marginBottom: 15, elevation: 1 },
    moreBtn: { position: 'absolute', top: 15, right: 15 },
    iconBox: { width: 60, height: 60, borderRadius: 20, backgroundColor: '#FFF7ED', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
    catName: { fontSize: 16, fontWeight: 'bold', color: '#1F2937', marginBottom: 5 },
    txCount: { fontSize: 12, color: '#9CA3AF', marginBottom: 15 },
    badgeAuto: { flexDirection: 'row', backgroundColor: '#EEF2FF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, alignItems: 'center', gap: 4 },
    badgeManual: { flexDirection: 'row', backgroundColor: '#F3F4F6', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, alignItems: 'center', gap: 4 },
    badgeTextAuto: { color: '#4F46E5', fontSize: 12, fontWeight: '600' },
    badgeTextManual: { color: '#6B7280', fontSize: 12, fontWeight: '600' }
});