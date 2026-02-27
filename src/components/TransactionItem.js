import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LucideUtensils, LucideCar, LucideShoppingBag, LucideBook } from 'lucide-react-native';

const TransactionItem = ({ title, amount, date, category }) => {
    // Logic chọn icon dựa trên hạng mục
    const getIcon = () => {
        switch (category) {
            case 'Ăn uống': return <LucideUtensils color="#F59E0B" size={20} />;
            case 'Di chuyển': return <LucideCar color="#10B981" size={20} />;
            case 'Mua sắm': return <LucideShoppingBag color="#3B82F6" size={20} />;
            case 'Học tập': return <LucideBook color="#8B5CF6" size={20} />;
            default: return <LucideUtensils color="#6B7280" size={20} />;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>{getIcon()}</View>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Text style={styles.amount}>-{amount}đ</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 20, marginBottom: 12 },
    iconWrapper: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
    info: { flex: 1 },
    title: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
    date: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
    amount: { fontSize: 16, fontWeight: 'bold', color: '#EF4444' }
});

export default TransactionItem;