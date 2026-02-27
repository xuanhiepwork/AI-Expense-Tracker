import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Easing, Modal } from 'react-native';
import { LucideMic, LucideWallet, LucideTrendingUp } from 'lucide-react-native';
import { AudioModule, useAudioRecorder } from 'expo-audio'; // Dùng thư viện mới của SDK 54
import TransactionItem from '../components/TransactionItem';
import CreateCategoryModal from '../components/CreateCategoryModal';
import { styles } from './css/HomeScreenStyles';

const HomeScreen = () => {
    // 1. Khai báo các State thiếu
    const [isModalVisible, setModalVisible] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [parsedData, setParsedData] = useState({
        amount: "45.000đ",
        category: "Ăn uống"
    });
    const [showCategoryModal, setShowCategoryModal] = useState(false);

    // 2. Khai báo Animation pulseAnim
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, { toValue: 1.2, duration: 1000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
                Animated.timing(pulseAnim, { toValue: 1, duration: 1000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
            ])
        ).start();
    }, [pulseAnim]);

    // 3. Logic Ghi âm với Hook mới
    const audioRecorder = useAudioRecorder({
        sampleRate: 44100,
        channels: 1,
        bitRate: 128000,
    });

    async function startRecording() {
        try {
            const status = await AudioModule.requestRecordingPermissionsAsync();
            if (status.granted) {
                audioRecorder.record();
                setIsRecording(true);
            }
        } catch (err) {
            console.error('Lỗi khởi động ghi âm:', err);
        }
    }

    async function stopRecording() {
        try {
            await audioRecorder.stop();
            setIsRecording(false);
            setModalVisible(true);
        } catch (err) {
            console.error('Lỗi dừng ghi âm:', err);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Chào Hiệp 👋</Text>
                    <View style={styles.balanceCard}>
                        <Text style={styles.balanceAmount}>5,200,000đ</Text>
                    </View>
                </View>

                <View style={styles.historyContainer}>
                    <View style={styles.historyHeader}>
                        <Text style={styles.sectionTitle}>Giao dịch gần đây</Text>
                    </View>
                    <TransactionItem title="Phở bò sáng" amount="45.000" date="26/02/2026" category="Ăn uống" />
                    <TransactionItem title="Grab về nhà" amount="32.000" date="25/02/2026" category="Di chuyển" />
                </View>

                <View style={styles.micWrapper}>
                    <Animated.View style={[
                        styles.micRing,
                        { transform: [{ scale: pulseAnim }], opacity: isRecording ? 0.8 : 0.4 }
                    ]} />
                    <TouchableOpacity
                        style={[styles.micButton, isRecording && { backgroundColor: '#EF4444' }]}
                        onPressIn={startRecording}
                        onPressOut={stopRecording}
                    >
                        <LucideMic color="#fff" size={32} />
                    </TouchableOpacity>
                    <Text style={styles.micHint}>{isRecording ? "Đang nghe..." : "Nhấn giữ để nói"}</Text>
                </View>

                <Modal transparent visible={isModalVisible} animationType="slide">
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalHandle} />
                            <Text style={styles.modalTitle}>Xác nhận thông tin</Text>
                            <View style={styles.inputField}>
                                <Text style={styles.fieldValue}>{parsedData.amount} - {parsedData.category}</Text>
                            </View>
                            <TouchableOpacity style={styles.btnSave} onPress={() => setModalVisible(false)}>
                                <Text style={styles.btnTextSave}>Lưu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

<CreateCategoryModal visible={showCategoryModal} onClose={() => setShowCategoryModal(false)} />

export default HomeScreen;