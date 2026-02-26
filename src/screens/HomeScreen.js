import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Easing, Modal } from 'react-native';
import { LucideMic, LucideWallet, LucideTrendingUp } from 'lucide-react-native';

const HomeScreen = () => {
    // 1. Khai báo State và Animation bên TRONG component
    const [isModalVisible, setModalVisible] = useState(false);
    const [parsedData, setParsedData] = useState({
        amount: "45,000đ",
        category: "Ăn uống",
        date: "26/02/2026",
        note: "Phở bò"
    });

    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [pulseAnim]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
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

                {/* Budget Status Card */}
                <View style={styles.budgetCard}>
                    <View style={styles.budgetHeader}>
                        <Text style={styles.budgetTitle}>Budget Status</Text>
                        <Text style={styles.budgetPercent}>61% used</Text>
                    </View>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: '61%', backgroundColor: '#EF4444' }]} />
                        </View>
                    </View>
                    <View style={styles.availableRow}>
                        <Text style={styles.availableLabel}>Available</Text>
                        <Text style={styles.availableAmount}>$1,360.00</Text>
                    </View>
                </View>

                {/* Giao dịch gần đây */}
                <View style={styles.historyContainer}>
                    <Text style={styles.sectionTitle}>Giao dịch gần đây</Text>
                    <View style={styles.transactionCard}>
                        <Text style={styles.txTitle}>Ăn sáng phở bò</Text>
                        <Text style={styles.txAmount}>-45,000đ</Text>
                    </View>
                </View>

                {/* Mic Button Area (Task AET-18) */}
                <View style={styles.micWrapper}>
                    <Animated.View style={[styles.micRing, { transform: [{ scale: pulseAnim }] }]} />
                    <TouchableOpacity
                        style={styles.micButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <LucideMic color="#fff" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.micHint}>Hold to Speak</Text>
                    <Text style={styles.micSubHint}>Say "Add deposit $42 for groceries"</Text>
                </View>

                {/* Modal Xác nhận (Task AET-22) */}
                <Modal transparent={true} visible={isModalVisible} animationType="slide">
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalHandle} />
                            <Text style={styles.modalTitle}>Xác nhận thông tin</Text>
                            <View style={styles.inputField}>
                                <Text style={styles.fieldLabel}>Số tiền</Text>
                                <Text style={styles.fieldValue}>{parsedData.amount}</Text>
                            </View>
                            <View style={styles.actionRow}>
                                <TouchableOpacity style={styles.btnSave} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.btnTextSave}>Lưu</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
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
    historyContainer: { paddingHorizontal: 20, paddingBottom: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 15 },
    transactionCard: { backgroundColor: '#fff', padding: 15, borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    txTitle: { fontWeight: '500' },
    txAmount: { color: '#EF4444', fontWeight: 'bold' },

    budgetCard: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 24,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    budgetHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    budgetTitle: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
    budgetPercent: { color: '#6B7280' },
    progressContainer: { marginBottom: 15 },
    progressLabel: { fontSize: 12, color: '#6B7280', marginBottom: 4 },
    progressBarBg: { height: 8, backgroundColor: '#F3F4F6', borderRadius: 4, marginBottom: 12, overflow: 'hidden' },
    progressBarFill: { height: '100%', borderRadius: 4 },
    availableRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#F3F4F6' },
    availableLabel: { fontWeight: '600' },
    availableAmount: { fontSize: 24, fontWeight: 'bold', color: '#4F46E5' },

    micWrapper: { alignItems: 'center', marginTop: 20, marginBottom: 40 },
    micButton: { backgroundColor: '#4F46E5', width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', zIndex: 2 },
    micRing: { position: 'absolute', width: 100, height: 100, borderRadius: 50, backgroundColor: '#E0E7FF', opacity: 0.5, top: -10 },
    micHint: { marginTop: 15, fontWeight: '600', color: '#1F2937' },
    micSubHint: { fontSize: 12, color: '#9CA3AF', marginTop: 5 },

    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
    modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 24, alignItems: 'center' },
    modalHandle: { width: 40, height: 4, backgroundColor: '#E5E7EB', borderRadius: 2, marginBottom: 20 },
    modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
    modalSubTitle: { color: '#6B7280', marginTop: 4, marginBottom: 24 },
    inputField: { width: '100%', backgroundColor: '#F9FAFB', padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#F3F4F6' },
    fieldLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 4 },
    fieldValue: { fontSize: 16, fontWeight: '600', color: '#111827' },
    actionRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
    btnRetry: { flex: 1, padding: 16, borderRadius: 16, backgroundColor: '#F3F4F6', alignItems: 'center' },
    btnSave: { flex: 1, padding: 16, borderRadius: 16, backgroundColor: '#10B981', alignItems: 'center' },
    btnTextSave: { color: '#fff', fontWeight: 'bold' },
    btnTextRetry: { color: '#6B7280', fontWeight: 'bold' },
});

export default HomeScreen;