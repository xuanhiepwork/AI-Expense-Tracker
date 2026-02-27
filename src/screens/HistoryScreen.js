import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { LucideSearch, LucideCalendar, LucideArrowUpDown, LucideFilter } from 'lucide-react-native';
import TransactionItem from '../components/TransactionItem';

const HistoryScreen = () => {
    return (
        <View style={styles.container}>
            {/* Blue Header */}
            <View style={styles.blueHeader}>
                <Text style={styles.headerTitle}>Lịch sử chi tiêu</Text>
                <Text style={styles.headerSubtitle}>Tháng 2 • 15 giao dịch</Text>
                <View style={styles.totalBadge}>
                    <Text style={styles.totalText}>Tổng chi: 2.486.000đ</Text>
                </View>
            </View>

            {/* Filter Chips & Search */}
            <View style={styles.filterSection}>
                <View style={styles.searchBar}>
                    <LucideSearch size={18} color="#9CA3AF" />
                    <TextInput placeholder="Tìm kiếm giao dịch..." style={styles.searchInput} />
                </View>

                <View style={styles.chipRow}>
                    <TouchableOpacity style={styles.chip}><LucideCalendar size={14} color="#4F46E5" /><Text style={styles.chipText}> Ngày</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.chip}><LucideArrowUpDown size={14} color="#4F46E5" /><Text style={styles.chipText}> Số tiền</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.chip, styles.activeChip]}><LucideFilter size={14} color="#fff" /><Text style={styles.activeChipText}> Hạng mục 10</Text></TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.list}>
                <Text style={styles.groupTitle}>HÔM NAY</Text>
                <TransactionItem title="Học tập" amount="150.000" date="26/02/2026" category="Học tập" />
                <TransactionItem title="Ăn uống" amount="45.000" date="26/02/2026" category="Ăn uống" />

                <Text style={styles.groupTitle}>HÔM QUA</Text>
                <TransactionItem title="Di chuyển" amount="32.000" date="25/02/2026" category="Di chuyển" />
                <TransactionItem title="Mua sắm" amount="320.000" date="25/02/2026" category="Mua sắm" />
            </ScrollView>
        </View>
    );
};