import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import {
    LucideX, LucidePill, LucideUtensils, LucideCar, LucideBook, LucideShoppingBag,
    LucideMusic, LucideHeart, LucideCoffee, LucideHome, LucideWifi, LucideDumbbell,
    LucidePlane, LucideBriefcase, LucideCamera, LucideFilm, LucideBus, LucideCheck, LucideSparkles
} from 'lucide-react-native';

// Danh sách màu và icon theo thiết kế
const COLORS = ['#F97316', '#22C55E', '#8B5CF6', '#3B82F6', '#EC4899', '#EF4444', '#EAB308', '#0EA5E9', '#6366F1', '#14B8A6', '#64748B', '#F43F5E'];
const ICONS = [
    { id: 'utensils', icon: LucideUtensils }, { id: 'car', icon: LucideCar }, { id: 'book', icon: LucideBook },
    { id: 'bag', icon: LucideShoppingBag }, { id: 'music', icon: LucideMusic }, { id: 'heart', icon: LucideHeart },
    { id: 'coffee', icon: LucideCoffee }, { id: 'home', icon: LucideHome }, { id: 'wifi', icon: LucideWifi },
    { id: 'dumbbell', icon: LucideDumbbell }, { id: 'plane', icon: LucidePlane }, { id: 'briefcase', icon: LucideBriefcase },
    { id: 'camera', icon: LucideCamera }, { id: 'film', icon: LucideFilm }, { id: 'bus', icon: LucideBus },
    { id: 'pill', icon: LucidePill }
];

const CreateCategoryModal = ({ visible, onClose }) => {
    // State lưu trữ dữ liệu người dùng nhập
    const [name, setName] = useState('uống thuốc');
    const [selectedIcon, setSelectedIcon] = useState('pill');
    const [selectedColor, setSelectedColor] = useState('#8B5CF6'); // Màu tím mặc định
    const [type, setType] = useState('Auto'); // 'Auto' hoặc 'Manual'

    // Component icon được chọn hiện tại
    const ActiveIcon = ICONS.find(i => i.id === selectedIcon)?.icon || LucidePill;

    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.content}>
                    {/* Header */}
                    <View style={styles.handle} />
                    <View style={styles.headerRow}>
                        <View>
                            <Text style={styles.title}>Tạo hạng mục mới</Text>
                            <Text style={styles.subtitle}>Tuỳ chỉnh danh mục của bạn</Text>
                        </View>
                        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                            <LucideX size={20} color="#6B7280" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* 1. Thẻ Preview (Cập nhật Real-time) */}
                        <View style={[styles.previewCard, { borderColor: selectedColor + '40' }]}>
                            <View style={[styles.previewIconBox, { backgroundColor: selectedColor + '15' }]}>
                                <ActiveIcon size={28} color={selectedColor} />
                            </View>
                            <View style={styles.previewInfo}>
                                <Text style={styles.previewName}>{name || 'Tên hạng mục'}</Text>
                                <View style={styles.typeBadge}>
                                    {type === 'Auto' ? <LucideSparkles size={12} color="#4F46E5" /> : null}
                                    <Text style={[styles.typeBadgeText, type === 'Manual' && { color: '#6B7280' }]}>
                                        {type}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* 2. Nhập tên */}
                        <Text style={styles.sectionLabel}>TÊN HẠNG MỤC</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Ví dụ: Ăn sáng, Đổ xăng..."
                            placeholderTextColor="#9CA3AF"
                        />

                        {/* 3. Chọn Icon */}
                        <Text style={styles.sectionLabel}>BIỂU TƯỢNG</Text>
                        <View style={styles.iconGrid}>
                            {ICONS.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.iconBox, selectedIcon === item.id && { backgroundColor: selectedColor + '20', borderColor: selectedColor }]}
                                    onPress={() => setSelectedIcon(item.id)}
                                >
                                    <item.icon size={24} color={selectedIcon === item.id ? selectedColor : '#9CA3AF'} />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* 4. Chọn Màu */}
                        <Text style={styles.sectionLabel}>MÀU SẮC</Text>
                        <View style={styles.colorGrid}>
                            {COLORS.map((color) => (
                                <TouchableOpacity
                                    key={color}
                                    onPress={() => setSelectedColor(color)}
                                    style={[styles.colorOuter, selectedColor === color && { borderColor: color }]}
                                >
                                    <View style={[styles.colorInner, { backgroundColor: color }]} />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* 5. Phân loại (Auto / Manual) */}
                        <Text style={styles.sectionLabel}>PHÂN LOẠI</Text>
                        <View style={styles.typeRow}>
                            <TouchableOpacity
                                style={[styles.typeCard, type === 'Auto' && styles.typeCardActive]}
                                onPress={() => setType('Auto')}
                            >
                                <View style={styles.typeCardHeader}>
                                    <LucideSparkles size={16} color={type === 'Auto' ? '#4F46E5' : '#6B7280'} />
                                    <Text style={[styles.typeTitle, type === 'Auto' && { color: '#4F46E5' }]}>Auto</Text>
                                    {type === 'Auto' && <LucideCheck size={16} color="#4F46E5" style={{ marginLeft: 'auto' }} />}
                                </View>
                                <Text style={styles.typeDesc}>Tự động nhận dạng từ giọng nói</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.typeCard, type === 'Manual' && styles.typeCardActive]}
                                onPress={() => setType('Manual')}
                            >
                                <View style={styles.typeCardHeader}>
                                    <Text style={[styles.typeTitle, type === 'Manual' && { color: '#4F46E5' }]}>✋ Manual</Text>
                                    {type === 'Manual' && <LucideCheck size={16} color="#4F46E5" style={{ marginLeft: 'auto' }} />}
                                </View>
                                <Text style={styles.typeDesc}>Chọn thủ công khi nhập</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Nút Tạo */}
                        <TouchableOpacity style={styles.createBtn} onPress={onClose}>
                            <Text style={styles.createBtnText}>+ Tạo hạng mục</Text>
                        </TouchableOpacity>
                        <View style={{ height: 40 }} />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
    content: { backgroundColor: '#fff', borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 24, paddingTop: 16, height: '90%' },
    handle: { width: 40, height: 4, backgroundColor: '#E5E7EB', borderRadius: 2, alignSelf: 'center', marginBottom: 20 },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
    title: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
    subtitle: { color: '#6B7280', marginTop: 4, fontSize: 13 },
    closeBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' },

    previewCard: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 20, borderWidth: 1, marginBottom: 24 },
    previewIconBox: { width: 48, height: 48, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    previewName: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginBottom: 4 },
    typeBadge: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    typeBadgeText: { fontSize: 12, color: '#4F46E5', fontWeight: '500' },

    sectionLabel: { fontSize: 12, fontWeight: 'bold', color: '#6B7280', marginBottom: 12, marginTop: 10, letterSpacing: 0.5 },
    input: { backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 16, padding: 16, fontSize: 16, color: '#111827', marginBottom: 24 },

    iconGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
    iconBox: { width: 50, height: 50, borderRadius: 16, backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'transparent' },

    colorGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
    colorOuter: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: 'transparent', justifyContent: 'center', alignItems: 'center' },
    colorInner: { width: 30, height: 30, borderRadius: 15 },

    typeRow: { flexDirection: 'row', gap: 12, marginBottom: 32 },
    typeCard: { flex: 1, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 16, padding: 16, backgroundColor: '#fff' },
    typeCardActive: { borderColor: '#4F46E5', backgroundColor: '#EEF2FF' },
    typeCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
    typeTitle: { fontWeight: 'bold', color: '#111827', fontSize: 15 },
    typeDesc: { fontSize: 12, color: '#6B7280', lineHeight: 18 },

    createBtn: { backgroundColor: '#4F46E5', padding: 16, borderRadius: 16, alignItems: 'center' },
    createBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default CreateCategoryModal;