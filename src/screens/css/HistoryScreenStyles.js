import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8FAFC' },

    // Header Styles
    blueHeader: { backgroundColor: '#4F46E5', padding: 20, paddingTop: 50, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
    headerTopRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
    backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
    headerTitleBox: { flex: 1, marginLeft: 15 },
    headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    headerSubtitle: { color: '#E0E7FF', fontSize: 12, marginTop: 4 },
    totalBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, alignItems: 'flex-end' },
    totalLabel: { color: '#E0E7FF', fontSize: 10 },
    totalText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },

    // Chips Styles
    chipRow: { flexDirection: 'row', gap: 10 },
    chipOutline: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
    chipActive: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
    chipTextWhite: { color: '#fff', fontSize: 13, fontWeight: '500', marginLeft: 6 },
    chipTextDark: { color: '#4F46E5', fontSize: 13, fontWeight: '600' },

    // Search Styles
    searchSection: { padding: 20, paddingBottom: 10 },
    searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 16, height: 48, borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB' },
    searchInput: { flex: 1, marginLeft: 10, fontSize: 15, color: '#1F2937' },

    // List Styles
    list: { paddingHorizontal: 20 },
    sortHint: { fontSize: 12, color: '#9CA3AF', fontWeight: '600', marginBottom: 15 },
    groupTitle: { fontSize: 13, fontWeight: 'bold', color: '#6B7280', marginTop: 10, marginBottom: 10 }

});