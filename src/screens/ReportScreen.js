import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LucideChevronLeft, LucideChevronDown, LucideBrainCircuit, LucideAlertTriangle, LucideLightbulb } from 'lucide-react-native';
import { styles } from './css/ReportScreenStyles';

const ReportScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header: Báo cáo & Ngân sách */}
            <View style={styles.blueHeader}>
                <TouchableOpacity style={styles.backBtn}><LucideChevronLeft color="#fff" /></TouchableOpacity>
                <View style={styles.headerInfo}>
                    <Text style={styles.headerTitle}>Báo cáo & Ngân sách</Text>
                    <Text style={styles.headerSubtitle}>Tháng 2 • 2026</Text>
                </View>
                <TouchableOpacity style={styles.monthPicker}>
                    <Text style={styles.monthText}>Feb 2026 </Text>
                    <LucideChevronDown size={14} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                {/* 1. Thẻ tóm tắt nhanh */}
                <View style={styles.summaryRow}>
                    <View style={[styles.summaryCard, { backgroundColor: '#6366F1' }]}>
                        <Text style={styles.sumLabel}>Tổng ngân sách</Text>
                        <Text style={styles.sumValue}>3.5Mđ</Text>
                    </View>
                    <View style={[styles.summaryCard, { backgroundColor: '#818CF8' }]}>
                        <Text style={styles.sumLabel}>Đã chi</Text>
                        <Text style={styles.sumValue}>2.1Mđ</Text>
                    </View>
                    <View style={[styles.summaryCard, { backgroundColor: '#94A3B8' }]}>
                        <Text style={styles.sumLabel}>Còn lại</Text>
                        <Text style={styles.sumValue}>1.4Mđ</Text>
                    </View>
                </View>

                {/* 2. Budget Status chi tiết */}
                <View style={styles.whiteCard}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>Budget Status</Text>
                        <Text style={styles.badgeText}>61% đã dùng</Text>
                    </View>
                    <View style={styles.mainProgressBg}>
                        <View style={[styles.mainProgressFill, { width: '61%' }]} />
                    </View>

                    {/* Tiến độ theo danh mục */}
                    <View style={styles.categoryProgressRow}>
                        <Text style={styles.catLabel}>Ăn uống</Text>
                        <View style={styles.miniBarBg}><View style={[styles.miniBarFill, { width: '80%', backgroundColor: '#F97316' }]} /></View>
                        <Text style={styles.catPercent}>80%</Text>
                    </View>
                </View>

                {/* 3. Cảnh báo từ AI */}
                <View style={styles.sectionHeader}>
                    <LucideAlertTriangle size={18} color="#EF4444" />
                    <Text style={styles.sectionTitle}> Cảnh báo</Text>
                    <View style={styles.countBadge}><Text style={styles.countText}>3</Text></View>
                </View>

                <View style={[styles.alertCard, { backgroundColor: '#FEF2F2', borderColor: '#FEE2E2' }]}>
                    <Text style={styles.alertText}>Bạn đã xài 80% ngân sách Ăn uống!</Text>
                    <Text style={styles.alertSub}>960,000 / 1,200,000đ đã chi</Text>
                </View>

                {/* 4. Gợi ý từ AI */}
                <View style={styles.sectionHeader}>
                    <LucideLightbulb size={18} color="#10B981" />
                    <Text style={styles.sectionTitle}> Gợi ý từ AI</Text>
                </View>

                <TouchableOpacity style={styles.suggestionCard}>
                    <View style={styles.suggestIcon}><Text style={{ color: '#fff' }}>1</Text></View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.suggestTitle}>Thử giảm chi phí Café để đạt mục tiêu tiết kiệm</Text>
                        <Text style={styles.suggestAmount}>~180,000đ/tháng</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default ReportScreen;