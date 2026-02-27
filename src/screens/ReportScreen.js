import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LucideBrainCircuit } from 'lucide-react-native';

const ReportScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Phân tích chi tiêu</Text>
            </View>

            {/* AI Insight Card */}
            <View style={styles.aiCard}>
                <View style={styles.aiHeader}>
                    <LucideBrainCircuit color="#4F46E5" size={20} />
                    <Text style={styles.aiTitle}> AI Insights</Text>
                </View>
                <Text style={styles.aiText}>
                    "Hiệp ơi, chi phí 'Ăn uống' của bạn đang tăng 15% so với tuần trước. Bạn nên cân nhắc giảm bớt các bữa ăn ngoài để duy trì ngân sách tháng này nhé!"
                </Text>
            </View>

            {/* Biểu đồ giả lập (Mock Charts) */}
            <View style={styles.chartPlaceholder}>
                <Text style={styles.chartTitle}>Cơ cấu chi tiêu</Text>
                <View style={styles.mockPieChart} />
                <View style={styles.legendRow}>
                    <Text style={styles.legend}>● Ăn uống (40%)</Text>
                    <Text style={styles.legend}>● Mua sắm (30%)</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6', padding: 20 },
    header: { marginTop: 40, marginBottom: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#111827' },
    aiCard: { backgroundColor: '#EEF2FF', padding: 20, borderRadius: 24, borderWidth: 1, borderColor: '#C7D2FE', marginBottom: 20 },
    aiHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    aiTitle: { fontWeight: 'bold', color: '#4F46E5' },
    aiText: { color: '#374151', lineHeight: 20, fontStyle: 'italic' },
    chartPlaceholder: { backgroundColor: '#fff', padding: 20, borderRadius: 24, alignItems: 'center', elevation: 2 },
    chartTitle: { fontSize: 16, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 20 },
    mockPieChart: { width: 200, height: 200, borderRadius: 100, backgroundColor: '#E5E7EB', borderWidth: 20, borderColor: '#4F46E5' },
    legendRow: { flexDirection: 'row', marginTop: 20, gap: 15 },
    legend: { fontSize: 12, color: '#6B7280' }
});

export default ReportScreen;