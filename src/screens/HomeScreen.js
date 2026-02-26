import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LucideMic, LucideWallet, LucideTrendingUp } from 'lucide-react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header: Tổng quan ngân sách */}
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Chào Hiệp 👋</Text>
                <View style={styles.balanceCard}>
                    <Text style={styles.balanceTitle}>Còn lại trong tháng</Text>
                    <Text style={styles.balanceAmount}>5,200,000đ</Text>
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <LucideWallet color="#10B981" size={16} />
                            <Text style={styles.statText}> Hạn mức: 10M</Text>
                        </View>
                        <View style={styles.statItem}>
                            <LucideTrendingUp color="#EF4444" size={16} />
                            <Text style={styles.statText}> Đã tiêu: 4.8M</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Danh sách giao dịch gần đây */}
            <ScrollView style={styles.historyContainer}>
                <Text style={styles.sectionTitle}>Giao dịch gần đây</Text>
                <View style={styles.transactionCard}>
                    <Text style={styles.txTitle}>Ăn sáng phở bò</Text>
                    <Text style={styles.txAmount}>-45,000đ</Text>
                </View>
                <View style={styles.transactionCard}>
                    <Text style={styles.txTitle}>Tiền điện tháng 2</Text>
                    <Text style={styles.txAmount}>-850,000đ</Text>
                </View>
            </ScrollView>

            {/* Nút Voice Trigger (Trái tim của App) */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.micButton}>
                    <LucideMic color="#fff" size={32} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    header: { padding: 20, backgroundColor: '#0047AB', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 60 },
    welcomeText: { color: '#fff', fontSize: 18, marginBottom: 15 },
    balanceCard: { backgroundColor: '#fff', padding: 20, borderRadius: 20, elevation: 5 },
    balanceTitle: { color: '#6B7280', fontSize: 14 },
    balanceAmount: { fontSize: 32, fontWeight: 'bold', color: '#111827', marginVertical: 5 },
    statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    statItem: { flexDirection: 'row', alignItems: 'center' },
    statText: { fontSize: 12, color: '#374151' },
    historyContainer: { padding: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
    transactionCard: { backgroundColor: '#fff', padding: 15, borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    txTitle: { fontWeight: '500' },
    txAmount: { color: '#EF4444', fontWeight: 'bold' },
    bottomNav: { position: 'absolute', bottom: 40, width: '100%', alignItems: 'center' },
    micButton: { backgroundColor: '#0047AB', width: 70, height: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center', elevation: 10 },
});

export default HomeScreen;