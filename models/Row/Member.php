<?php
class Row_Member extends Kwf_Model_Db_Row
{
    protected $_cacheImages = array(
        'default' => array(120, 0)
    );

    public function __toString()
    {
        return $this->lastname . ' ' . $this->firstname;
    }
}
