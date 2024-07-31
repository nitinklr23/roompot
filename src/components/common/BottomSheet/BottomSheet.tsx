import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

interface MyBottomSheetProps {
  bottomInset: number
}

const MyBottomSheet = ({bottomInset} : MyBottomSheetProps ) => {

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useFocusEffect(
    React.useCallback(() => {
      return () => bottomSheetModalRef.current?.close()
    }, [])
  );

  useEffect(() => {
    handlePresentModalPress()
  }, [])
  
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const snapPoints = useMemo(() => ['50%'], []);

  
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        bottomSheetModalRef.current?.close()
      }}
    >
       <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              bottomInset={bottomInset}
            >
              <View style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
              </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MyBottomSheet;
