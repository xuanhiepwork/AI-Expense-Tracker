import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { LucideArrowLeft, LucidePlus, LucideSearch, LucideMoreVertical, LucideUtensils, LucideCar, LucideSparkles, LucideHand } from 'lucide-react-native';
import CreateCategoryModal from '../components/CreateCategoryModal';
import { styles } from './css/CategoryScreenStyles';
import DeleteCategoryModal from '../components/DeleteCategoryModal';

const MOCK_CATEGORIES = [
    { id: 1, name: 'Ăn uống', count: 24, type: 'Auto', icon: LucideUtensils, color: '#F97316', bg: '#FFF7ED' },
    { id: 2, name: 'Di chuyển', count: 18, type: 'Auto', icon: LucideCar, color: '#10B981', bg: '#F0FDF4' },
    { id: 3, name: 'uống thuốc', count: 5, type: 'Manual', icon: LucideHand, color: '#8B5CF6', bg: '#F5F3FF' }
];

const CategoryScreen = () => {
    const [activeTab, setActiveTab] = useState('Tất cả');
    const [showCreateModal, setShowCreateModal] = useState(false);

    // State cho Modal Xóa
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    // Hàm xử lý xóa
    const handleDeleteConfirm = () => {
        console.log(`Đã xóa hạng mục: ${categoryToDelete?.name}`);
        setShowDeleteModal(false);
        // Sau này tích hợp API ở đây
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.blueHeader}>
                <View style={styles.headerTop}>
                    <TouchableOpacity style={styles.backBtn}>
                        <LucideArrowLeft color="#fff" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerTitle}>Hạng mục</Text>
                        <Text style={styles.headerSub}>12 danh mục • 5 Auto • 7 Manual</Text>
                    </View>
                </View>

                {/* Nút Tạo hạng mục mới */}
                <TouchableOpacity style={styles.createBtn} onPress={() => setShowCreateModal(true)}>
                    <View style={styles.iconPlusBox}><LucidePlus size={16} color="#4F46E5" /></View>
                    <Text style={styles.createBtnText}>Tạo hạng mục mới</Text>
                </TouchableOpacity>

                {/* Tabs */}
                <View style={styles.tabRow}>
                    {['Tất cả', 'Auto', 'Manual'].map(tab => (
                        <TouchableOpacity
                            key={tab}
                            style={activeTab === tab ? styles.tabActive : styles.tabInactive}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={activeTab === tab ? styles.tabTextActive : styles.tabTextInactive}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Thanh Tìm kiếm */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <LucideSearch size={20} color="#9CA3AF" />
                    <TextInput placeholder="Tìm kiếm hạng mục..." style={styles.searchInput} placeholderTextColor="#9CA3AF" />
                </View>
            </View>

            {/* Danh sách lưới (Grid) */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listHeader}>
                    <Text style={styles.listTitle}>TẤT CẢ ({MOCK_CATEGORIES.length})</Text>
                </View>

                <View style={styles.grid}>
                    {MOCK_CATEGORIES.map(cat => (
                        <View key={cat.id} style={styles.card}>
                            {/* Nút 3 chấm để gọi Modal Xoá */}
                            <TouchableOpacity
                                style={styles.moreBtn}
                                onPress={() => {
                                    setCategoryToDelete(cat);
                                    setShowDeleteModal(true);
                                }}
                            >
                                <LucideMoreVertical size={20} color="#9CA3AF" />
                            </TouchableOpacity>

                            <View style={[styles.iconBox, { backgroundColor: cat.bg }]}>
                                <cat.icon size={30} color={cat.color} />
                            </View>
                            <Text style={styles.catName}>{cat.name}</Text>
                            <Text style={styles.txCount}>{cat.count} giao dịch</Text>

                            {cat.type === 'Auto' ? (
                                <View style={styles.badgeAuto}>
                                    <LucideSparkles size={12} color="#4F46E5" />
                                    <Text style={styles.badgeTextAuto}>Auto</Text>
                                </View>
                            ) : (
                                <View style={styles.badgeManual}>
                                    <LucideHand size={12} color="#6B7280" />
                                    <Text style={styles.badgeTextManual}>Manual</Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
                {/* Khoảng trống để không bị vướng Bottom Tab */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Các Modals */}
            <CreateCategoryModal visible={showCreateModal} onClose={() => setShowCreateModal(false)} />

            <DeleteCategoryModal
                visible={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteConfirm}
                categoryName={categoryToDelete?.name || ''}
            />
        </View>
    );
};

export default CategoryScreen;