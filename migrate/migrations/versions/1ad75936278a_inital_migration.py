"""Inital Migration

Revision ID: 1ad75936278a
Revises: 
Create Date: 2020-03-30 02:46:21.482477

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1ad75936278a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('organization_needs',
    sa.Column('organization_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('need', sa.VARCHAR(length=100), autoincrement=False, nullable=False)
    )
    op.create_table('organizations',
    sa.Column('id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('name', sa.VARCHAR(length=100), autoincrement=False, nullable=False),
    sa.Column('contact_email', sa.VARCHAR(length=200), autoincrement=False, nullable=True),
    sa.Column('zip_code', sa.VARCHAR(length=50), autoincrement=False, nullable=True),
    sa.Column('description', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('image_url', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('latitude', sa.VARCHAR(length=100), autoincrement=False, nullable=True),
    sa.Column('longitude', sa.VARCHAR(length=100), autoincrement=False, nullable=True),
    sa.Column('address', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('accepts_opened', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('instructions', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('needs', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('city', sa.VARCHAR(length=500), autoincrement=False, nullable=True),
    sa.Column('state', sa.VARCHAR(length=100), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='organizations_pkey')
    )

def downgrade():
    op.drop_table('organizations')
    op.drop_table('organization_needs')
