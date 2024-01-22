import pandas as pd
import tensorflow as tf
from transformers import BertTokenizer, TFBertForSequenceClassification
from sklearn.preprocessing import LabelEncoder

train_file_path = 'spam_train.csv'
train_df = pd.read_csv(train_file_path)

train_texts = train_df['Text'][:].tolist()
train_labels = train_df['Label'][:].tolist()

test_file_path = '/spam_test.csv'
test_df = pd.read_csv(test_file_path)

test_texts = test_df['Text'][:].tolist()
test_labels = test_df['Label'][:].tolist()



label_encoder = LabelEncoder()
train_labels = label_encoder.fit_transform(train_labels)

test_labels = label_encoder.fit_transform(test_labels)


tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = TFBertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)

tokenized_train_inputs = tokenizer(train_texts, padding=True, truncation=True, return_tensors='tf')

tokenized_test_inputs = tokenizer(test_texts, padding=True, truncation=True, return_tensors='tf')


train_dataset = tf.data.Dataset.from_tensor_slices((dict(tokenized_train_inputs), train_labels))

optimizer = tf.keras.optimizers.Adam(learning_rate=0.0001)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
metric = tf.keras.metrics.SparseCategoricalAccuracy('accuracy')
model.compile(optimizer=optimizer, loss=loss, metrics=[metric])
early_stopping = tf.keras.callbacks.EarlyStopping(
    monitor='val_loss', patience=3, restore_best_weights=True
)
test_dataset = tf.data.Dataset.from_tensor_slices((dict(tokenized_test_inputs), test_labels))

# model.fit(train_dataset.shuffle(36000).batch(32), epochs=6)
history = model.fit(
    train_dataset.shuffle(120).batch(32),
    epochs=6,
    validation_data=test_dataset.batch(32),
    callbacks=[early_stopping]
)

test_dataset = tf.data.Dataset.from_tensor_slices((dict(tokenized_test_inputs), test_labels))
eval_result = model.evaluate(test_dataset.batch(32))
print("Evaluation Loss:", eval_result[0])
print("Evaluation Accuracy:", eval_result[1])


model.save_pretrained('spam_detect')
